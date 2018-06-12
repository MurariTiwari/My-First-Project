/*var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
res.send('HOME PAGE');
});
router.get('/front page',function(req,res){
res.send('front page');
});

module.exports=router;*/
var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
res.send('GET route on things.');
});
router.post('/', function(req, res){
res.send('POST route on things.');
});
//export this router to use in our index.js
module.exports = router;