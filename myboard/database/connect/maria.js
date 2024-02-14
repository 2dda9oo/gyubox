const mysql = require('mysql');

let conn;

function getPosts(callback) {
    const query = "SELECT wid, writer, contnet, upload_date, title FROM post";
    conn.query(query, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }

  function getPostByWid(wid, callback) {
    const query = "SELECT * FROM post WHERE wid = ?";
    const values = [wid];
  
    conn.query(query, values, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        if (results.length === 0) {
          callback(null, null); // 해당 wid에 해당하는 컬럼이 없을 경우 null 반환
        } else {
          const post = results[0]; // 첫 번째 행을 가져옴
          callback(null, post);
        }
      }
    });
  }
  

  function createPost(writer, title, contnet, callback) {
    const query = "INSERT INTO post (writer, title, contnet, upload_date, wid) VALUES (?, ?, ?, ?, ?)";
    const upload_date = new Date();
    const values = [writer, title, contnet, upload_date, null];
    
    conn.query(query, values, (err, results) => {
      if (err) {
        callback(err);
      } else {
        const wid = results.insertId;
        callback(null, wid);
      }
    });
  }

  function deletePost(wid, callback) {
    const query = "DELETE FROM post WHERE wid = ?";
    const values = [wid];
  
    conn.query(query, values, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
  
  function getCommentsByWid(wid, callback) {
    const query = "SELECT * FROM comment WHERE wid = ?";
    const values = [wid];
  
    conn.query(query, values, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }

  // maria.js

  function createComment(wid, writer_name, comment_content, callback) {
    const query = "INSERT INTO comment (cid, writer, upload_date, content, wid) VALUES (?, ?, ?, ?, ?)";
    const upload_date = new Date();
    const values = [null, writer_name, upload_date, comment_content, wid];
    
    conn.query(query, values, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
  
  function deleteCommentsByWid(wid, callback) {
    const query = "DELETE FROM comment WHERE wid = ?";
    const values = [wid];
  
    conn.query(query, values, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
  
  function deleteComment(cid, callback) {
    const query = "DELETE FROM comment WHERE cid = ?";
    const values = [cid];
  
    conn.query(query, values, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
  
    
module.exports = {
    connect: function() {
      if (conn && conn.state !== 'disconnected') {
        conn.end();
      }
  
      conn = mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'100709',
        database:'post'
      });
  
      conn.connect(function(err) {
        if (err) throw err;
        console.log('MariaDB에 연결되었습니다!');
      });
    },
    getPosts: getPosts,
    createPost: createPost,
    getPostByWid: getPostByWid,
    deletePost: deletePost,
    getCommentsByWid: getCommentsByWid,
    createComment: createComment,
    deleteCommentsByWid: deleteCommentsByWid,
    deleteComment: deleteComment
  };