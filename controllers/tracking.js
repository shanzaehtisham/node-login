  var uri = "mongodb://shanzadb:Indushospital1@ds058369.mlab.com:58369/fyp";
  var MongoClient = require('mongodb').MongoClient;


exports.add = function(req, res) {
	
	console.log('JSON Received as : ' +req.body.data);
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;

			 db.collection('Tracking').insert(req.body, function(err, result) {
				 if(err)
					res.send("Error");
				else {
					console.log("ID returned = " + result["ops"][0]["_id"]);
					res.send("Success");
				}
					
			 });
			 
			db.collection('Tracking').count(function (err, count) {
				if (err) throw err;
					console.log('Total Rows in Tracking: ' + count);
			});
		});	 
	};
	