var mongoclient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";
mongoclient.connect(url,function(err,db)
{
	if(err) throw err;
	db.createCollection('customers',function(err,res)
	{
	 if(err) throw err;
	 console.log('COLLECTION CREATED');
	 db.close();
	});
	
});