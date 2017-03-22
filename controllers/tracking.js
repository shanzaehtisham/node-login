	var uri = "mongodb://shanzadb:Indushospital1@ds058369.mlab.com:58369/fyp";
	var MongoClient = require('mongodb').MongoClient;
	var ObjectId = require('mongodb').ObjectID;
	var mongoose = require('mongoose');


	var model = require('./../models/tracking');
  
	var dbcon = mongoose.connect(uri, function(err, db){
		if(err){
			console.log("Can not connect to DB");
			console.log(err);
		}
		else{
			console.log("Connected to DB");
		}
	});

	var TrackingModel = dbcon.model('Tracking', model.trackingSchema);
  
	exports.add = function(req, res) {

		var obj = new TrackingModel(req.body)
		
		obj.save(function(err, result) {
			if(err)
				res.send("Error");
			else {
				console.log("ID returned = " + result["_id"]);
				return res.json(result["_id"]);
			}
					
		});
	};
	

	exports.updateEndLocation = function(req, res) {

		var idReceived = req.body.Object_ID.replace(/"/g, '');
		var query = { "_id": new mongoose.Types.ObjectId(idReceived) };
		
		TrackingModel.update
		(
			query
			,{ 
				"$set": 
				{
					"End_location_latlng": req.body.End_location_latlng,
					"End_location_name": req.body.End_location_name,
					"Journey_EndDateTime" : req.body.Journey_EndDateTime
				}
			},
			function(err, result){
				console.log('success');
				if (err) throw err;
			console.log('result of update = '+ result);
			}
		);
		
	};

	
	exports.updateRoute = function(req, res) {
		var idReceived = req.body.Object_ID.replace(/"/g, '');
		var query = { "_id": new mongoose.Types.ObjectId(idReceived) };
		
		TrackingModel.update
		(
			query
			,{ 
				"$push":
				{ "Route":
					{ "$each":
						[
						"Route.crnt_location_latlng": req.body.crnt_location_latlng,
						"Route.crnt_location_name": req.body.crnt_location_name,
						"Route.crnt_time" : req.body.crnt_time
						]
					}
				}
			},
			function(err, result){
			if (err) {console.log('Error in route update = '+ err); }
				else { console.log('result of update = '+ result); }
			}
		);
	};
