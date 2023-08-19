var express = require('express');
var router = express.Router();
const getMessages = require('getMessages')
const postMessage = require('postMessage')




/* GET message */
router.get('/', getMessages);



/*
Post message
*/
router.post('/', postMessage)


module.exports = router;
