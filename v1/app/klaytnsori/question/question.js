var express = require('express');
var router = express.Router();
var result = require('../../../../result');
var caver = require('caver-js');
var myspl = require('mysql');
var dbconfig = require('../../../../database.js');
var connection = mysql.createConnection(dbconfig);

//DB사용시 connection.connet();
//DB사용 종료시 connection.end();
//카테고리 요청
router.get('/category', function(req,res,next){
  //DB에서 category관련 data를 받아서 출력
  klaytnsoridb.query('SQL', function(err, rows, fields){
    res.json(rows);
  });
});

//질문 작성
router.post('/insert_question', function(req,res,next){
  var isValid = true;
  var validationError = {
    name : 'ValidationError',
    errors : {}
  };

  if(!req.body.session_id){
    isValid = false;
    validationError.errors.session_id = {message : 'Session Error' };
  }

  if(!req.body.question_title){
    isValid = false;
    validationError.errors.question_title = {message : 'Title is empty' };
  }

  if(!req.body.quetion_klay){
    isValid = false;
    validationError.errors.question_klay = {message : 'Klay is empty' };
  }

  if(!req.body.question_content){
    isValid = false;
    validationError.errors.question_content = {message : 'Content is empty' };
  }

  if(!req.body.category){
    isValid = false;
    validationError.errors.category = {message : 'Choose the category' };
  }

  if(!isValid) return res.json(result.successFalse(validationError));
  else next();
}, function(req,res,next){
  var u_sid = req.body.session_id;
  var u_address;
  //DB에서 해당 session_id로 email찾고 해당 user의 지갑주소를 가져온다.

  //caver에서 호출자의 wallet에서 server의 wallet으로 klay전송

  var b_time;
  //caver에서 해당 block의 시간을 받아온다.


  var q_id;
  //DB에 필요한 정보를 모두 저장 후 해당 질문의 id를 q_id에 저장.

  var data = {
    question_id : q_id
  };
  return res.json(result.successTrue(data));
});

//질문 보기
router.get('/show_question',function(req,res,next){
  var isValid = true;
  var validationError = {
    name : 'ValidationError',
    errors:{}
  };

  if(!req.query.question_id){
    isValid = false;
    validationError.errors.question_id = {message:'404 Not Found'};
  }

  if(!isValid) return res.json(result.successFalse(validationError));
  else next();
},function(req,res,next){
  //DB에서 해당 question_id에 해당하는 내용을 모두 가져온다.

  var data = {
    question_title : ,
    question_klay : ,
    question_content : ,
    question_date : ,
    qusetion_email : ,
    question_state :
  };
  return res.json(result.successTrue(data));
});

//질문 리스트
router.get('/question_list',function(req,res,next){
  var isValid = true;
  var validationError = {
    name : 'ValidationError',
    errors : {}
  };

  if(!req.query.question_state){
    isValid = false;
    validationError.errors.question_state = { message : '404 Not Found'};
  }

  if(!isValid) return res.json(result.successFalse(validationError));
  else next();
}, function(req,res,next){
  var q_date;
  //DB에서 시간을 꺼내와서 현재시간과 비교 후 남은 시간을 보내줌
  var remain_date = ;

  var data = {
    question_id : ,
    category : ,
    question_title : ,
    question_reamin_date : remain_date,
    question_klay : ,
    question_state :
  };
  return res.json(result.successTrue(data));
});

//답변 등록
router.post('/insert_answer', function(req,res,next){
  var isValid = true;
  var validationError = {
    name : 'ValidationError',
    errors : {}
  };

  if(!req.body.question_id){
    isValid = false;
    validationError.errors.question_id = { message : '404 Not Found'};
  }

  if(!req.body.session_id){
    isValid = false;
    validationError.errors.session_id = { message : 'Session Error'};
  }

  if(!req.body.answer_content){
    isValid = false;
    validationError.errors.answer_content = { message : 'Answer is empty'};
  }

  if(!isValid) return res.json(result.successFalse(validationError));
  else next();
}, function(req,res,next){

  //DB에 답변 table에 들어오는 정보 저장.

  var data = {};
  return res.json(result.successTrue(data));
});

//Like 등록
router.post('/insert_like', function(req,res,next){
  var isValid = true;
  var validationError = {
    name : 'ValidationError',
    errors : {}
  };

  if(!req.body.question_id){
    isValid = false;
    validationError.errors.question_id = { message : '404 Not Found'};
  }

  if(!req.body.session_id){
    isValid = false;
    validationError.errors.session_id = { message : 'Session Error'};
  }

  if(!req.body.answer_id){
    isValid = false;
    validationError.errors.answer_id = { message : '404 Not Found'};
  }

  if(!isValid) return res.json(result.successFalse(validationError));
  else next();
},function(req,res,next){

  //DB에 like table에 들어오는 정보 저장.

  var data = {};
  return res.json(result.successTrue(data));
});

//답변 채택
router.post('/select_answer',function(req,res,next){
  var isValid = true;
  var validationError = {
    name : 'ValidationError',
    errors : {}
  };

  if(!req.body.question_id){
    isValid = false;
    validationError.errors.question_id = { message : '404 Not Found'};
  }

  if(!req.body.session_id){
    isValid = false;
    validationError.errors.session_id = { message : 'Session Error'};
  }

  if(!req.body.answer_id){
    isValid = false;
    validationError.errors.answer_id = { message : '404 Not Found'};
  }

  if(!isValid) return res.json(result.successFalse(validationError));
  else next();
},function(req,res,next){
  //DB에서 question의 상태 update
  var u_email;
  //DB에서 session_id로 들어온 email과 answer_id로 들어온 id의 wallet을 찾는다.

  //caver에서 server의 wallet에서 answer_id의 wallet으로 klay 전송

  var data = {
    question_state :
  };
  return res.json(result.successTrue(data));
})
