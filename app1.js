/*var express=require('express');
var app=express();
var route=require('./index.js');

app.use('/route',route);

app.listen(8080,function(){
console.log('app started');
});
*/var express = require('Express');
var app = express();
var things = require('./things.js');
//both index.js and things.js should be in same directory
app.use('/things', things);
app.listen(3000);