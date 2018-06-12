var http=require('http');
var url=require('url');
var fs=require('fs');
var str="";
var str1="";
var file;
var obj;

http.createServer(function(req,res){
	var q=url.parse(req.url,true);
if(q.pathname=='/')
	{
		console.log(q.query.activities);
	var filename="."+"/home.html";	
	if(q.query.activities=="CSE")
	{
		var qdata=q.query;
		var m=JSON.stringify(qdata.activities);
		filename="."+"/subject.html";
		
	}
	if(q.query.activities=="ECE"||q.query.activities=="MECH"||q.query.activities=="EEE"||q.query.activities=="CIVIL")
	{
		res.write("404 File not Found");
		filename="";
	}
	}
	else if(q.pathname=="/mt.html"){                    /*adding the contents*/
		var qdata=q.query;
		var file=qdata.subject+".txt";
		var filename="."+"/content.html";
		var m=JSON.stringify(qdata);
	if (fs.existsSync(file)) {
		str=","+m;
        console.log("file Exit");
	   
		fs.appendFile(file,str,function(err)
		{
			if (err) throw err;
			console.log('saved!');
		});
    }else
     {    str="";   
	  fs.appendFile(file,m,function(err)
		{
			if (err) throw err;
			console.log('saved!');
		});
	console.log('file not available');
	}
	}
	
	 
	 
	
	else if(q.pathname=="/mt3.html"){                    /*adding the contents*/
		var qdata=q.query;
		var file="v"+qdata.subject+".html";
		var filename="."+"/content.html";
		console.log((qdata.content).toString);
	if (fs.existsSync(file)) {
		
        console.log("file Exit");
	   
		fs.appendFile(file,(qdata.content),function(err)
		{
			if (err) throw err;
			console.log('saved!');
		});
    }else
     {      
	  fs.appendFile(file,(qdata.content),function(err)
		{
			if (err) throw err;
			console.log('saved!');
		});
	console.log('file not available');
	}
	}
	
	
	
	
	
	
		else if(q.pathname=="/mt1.html"){
                                                                			/*displaying content according to subject*/
	
		var qdata=q.query;
		file=qdata.subject+".txt";
		console.log(file);
		var filename="."+"/tutorial.html";
	     if (fs.existsSync(file)) {
		str1=""
        console.log("file Exit");
	   
		fs.readFile(file,function(err,data)
		{
			if (err) throw err;
			var myobj=JSON.parse("["+data+"]");
			for(i in myobj)
			{
				str1+="<h1>"+myobj[i].topic+"</h1>";
				str1+="</br>"+myobj[i].content+"</br>";
			}
			console.log('saved!');
		});
    }else
     {   
	console.log('file not available');
	}
	
	}

else if(q.pathname=='/home.html')
  {
	   var filename="."+"/subject.html";
  }
else{
		var filename="."+q.pathname;
     }
		
		
		
           fs.readFile(filename,function(err,data)
            {
if(err)
{ 
res.writeHead(404,{'content-type':'text/html'});
return res.end("404 Not Found");
}
res.writeHead(200,{'content-type':'text/html'});
res.write(data);
			res.write(str1);
str1="";
res.end();
});

		  
}).listen(8080);
console.log('Server Started');