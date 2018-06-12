var express=require('express');
var app=express();
app.get('/:id([0,9]{2})',function(req,res)
{
	res.send('bhosadi '+ req.params.id);
});

app.listen(8080,function()
{
	console.log("Server running at port 8080 ");
});