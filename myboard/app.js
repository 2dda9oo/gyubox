var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var currentPage = 1;


var app = express();

var maria = require('./database/connect/maria');
maria.connect();

// view engine setup
app.locals.pretty = true;
app.set('html', path.join(__dirname, 'html'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next){
  maria.getPosts(function(err, results){
    if(err){
      next(err);
    } else {
      console.log(results);
      res.render('list', {posts: results});
    }
  });
});

app.get('/view/:wid', function(req, res, next){
  const { wid } = req.params;
  console.log('확인', wid);

  maria.getPostByWid(wid, function(err, post){
    if(err){
      next(err);
    } else {
      maria.getCommentsByWid(wid, function(err, comments) {
        if (err) {
          next(err);
        } else {
          console.log(post);
          res.render('view', { post: post, comments: comments });
        }
      });
    }
  });
});


app.get('/write', function(req, res) {
  res.render('write'); // write.ejs 파일을 렌더링하여 응답으로 보냄
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// write.ejs로부터의 POST 요청 처리
app.post('/', (req, res) => {
  const { writer, title, contnet } = req.body; // 요청의 본문에서 필드 값을 추출
  
  maria.createPost(writer, title, contnet, (err, wid) => { // 수정: createPost 함수에서 새로운 게시물의 wid 값을 반환
    if (err) {
      console.error('Error inserting data into the database:', err);
      return;
    }
    console.log('Data inserted into the database');
    // 필요한 처리 후 리다이렉트 등을 수행
    res.redirect(`/view/${wid}`); // 수정: 새로운 게시물의 wid 값을 view 경로에 전달
    console.log('새 게시물 wid:', wid);
  });
});

app.post('/delete/:wid', function(req, res, next) {
  const { wid } = req.params;

  // 게시물에 해당하는 댓글 삭제
  maria.deleteCommentsByWid(wid, function(err) {
    if (err) {
      next(err);
    } else {
      // 댓글 삭제 후 게시물 삭제
      maria.deletePost(wid, function(err) {
        if (err) {
          next(err);
        } else {
          res.redirect('/');
        }
      });
    }
  });
});

app.post('/comment/:wid', function(req, res, next) {
  const { wid } = req.params;
  const { writer_name, comment_content} = req.body;
  console.log('댓글 작성:', req.body);
  console.log('wid:', req.params);

  maria.createComment(wid, writer_name, comment_content, function(err) {
    if (err) {
      console.log('insert fail');
      next(err);
    } else {
      console.log('Data inserted into the database');
      res.redirect(`/view/${wid}`);
    }
  });
});

app.post('/deleteComment/:cid', function(req, res, next) {
  const { cid } = req.params;
  console.log('댓글 삭제:', req.params);

  maria.deleteComment(cid, function(err) {
    if (err) {
      console.log('delete fail');
      next(err);
    } else {
      console.log('Data deleted from the database');
      res.redirect('/');
    }
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error pagenpm 
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
