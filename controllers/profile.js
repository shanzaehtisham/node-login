
  var MongoClient = require('mongodb').MongoClient;

exports.findAll = function(req, res) {

	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;
		 
		 db.collection('profile', function(err, collection) {
			 
             collection.find().toArray(function(err, items) {
				 console.log(items);
				 return res.json(items);
             });
			 
         });
		 
	  });
};

exports.login = function(req, res) {
	
	console.log('JSON Received as : ' +req.body.UserName);
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;
		
			 db.collection('Profile', function(err, collection) {
			
			var name  = req.body.UserName;
			var pass  = req.body.Password;
			
			collection.findOne({UserName: name, Password: pass},function (err, Name) {
				
			if(err)
				return res.json('Error');
			else{
					if(Name){
					return res.json('Success');
					console.log(Name);
					}
					else
					return res.json('NotMatched');	
				}
				
  });
         });
		});	 
	};

exports.add = function(req, res) {
	
	console.log('JSON Received as : ' +req.body.data);
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;
		 
		 //var stringJSON = {"Name":"Shanzah","ProfileID":"101","Gender":"Female"};
		 
			 db.collection('Profile').insert(req.body, function(err, result) {
				 if(err)
					res.send("Error");
				else
					res.send("Success");
			 });
			 
			db.collection('Profile').count(function (err, count) {
				if (err) throw err;
					console.log('Total Rows in Profile: ' + count);
			});
		});	 
	};
	
	
	
