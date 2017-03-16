  var uri = "mongodb://shanzadb:Indushospital1@ds058369.mlab.com:58369/fyp";
  var MongoClient = require('mongodb').MongoClient;
  var mongoose = require('mongoose');


exports.add = function(req, res) {
	
	console.log('JSON Received as : ' +req.body.data);
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;

			 db.collection('Tracking').insert(req.body, function(err, result) {
				 if(err)
					res.send("Error");
				else {
					console.log("ID returned = " + result["ops"][0]["_id"]);
					return res.json(result["ops"][0]["_id"]);
				}
					
			 });
			 
			db.collection('Tracking').count(function (err, count) {
				if (err) throw err;
					console.log('Total Rows in Tracking: ' + count);
			});
		});	 
	};
	

exports.updateEndLocation = function(req, res) {
	
	console.log('ObjectID received = ' + req.body.Object_ID);

	var idReceived = req.body.Object_ID.replace(/"/g, '\'');
	
	console.log('After parsing = ' + idReceived);
	
	MongoClient.connect(uri, function (err, db) {
   
		if(err) throw err;
		
		db.collection('Tracking').update(
			{
				"_id": mongoose.Types.ObjectId(idReceived)
			},
			{ 
				$set: {
					"End_location_latlng": req.body.End_location_latlng,
					"End_location_name": req.body.End_location_name,
					"Journey_EndDateTime" : req.body.Journey_EndDateTime
				}
			},
			function (err, result) {
				if (err) throw err;
				console.log('result of update = '+result);
			}
		);
	 
	});
};


exports.updateRoute = function(req, res) {
	
};


