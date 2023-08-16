var express = require('express');
var router = express.Router();

const jsonTest = {
  name: "mural",
  age: 3454,
}


/* GET message */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json(jsonTest)
});

async function getMessages(req, res, next){
  // access db
  const messages = null;

  // send response
  res.json(messages)
}  

/*
Post message
*/
router.post('/', postMessage)

async function postMessage(req, res, next){
  // 
}

module.exports = router;
