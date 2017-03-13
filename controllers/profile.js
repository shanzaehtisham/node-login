  var uri = "mongodb://shanzadb:Indushospital1@ds058369.mlab.com:58369/fyp";
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

exports.add = function(req, res) {
	
	console.log('JSON Received as : ' +req.body.data);
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;

		 /*
		 db.collection('profile').insert(req.body, function(err, result) {
			 if(err)
					res.send("Error");
				else
					res.send("Success");
		 });
			*/
		
		// previous code
		
			db.collection('profile', function(err, collection) {
				
				collection.insert(req.body, function(err, result){
					
					if(err)
						res.send("Error");
					else
						res.send("Success");
				});
			});
		
		
			db.collection('profile').count(function (err, count) {
				if (err) throw err;
				
				console.log('Total Rows: ' + count);
			});
		});	 
	};