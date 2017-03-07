
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
	
	console.log('JSON Received as : ' + req.body);
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;

		 db.collection('profile', function(err, collection) {
			
			collection.insert(req.body, function(err, result){				
				if(err)
					res.send("Error");
				else
					res.send("Success");
			});
			
			//collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });

			db.collection('profile').count(function (err, count) {
				if (err) throw err;
				
				console.log('Total Rows: ' + count);
			});
		});
               
		 
	});
	
	
};