var express = require('express');
var router = express.Router();

const maria = require('../database/connect/maria');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판' });
});

router.get('/create', function(req, res){
  maria.query('CREATE TABLE POST ('
  + 'POST_CODE INT(11) NOT NULL,'
  + 'NAME VARCHAR(200) NULL DEFAULT NULL COLLATE utf8mb3_general_ci,'
  + 'PRIMARY KEY (POST_CODE) USING BTREE)', function(err, rows, fields){
    if(!err) {
      res.send(rows);
    } else {
      console.log("err : " + err);
      res.send(err);
    }
  });
});


module.exports = router;
