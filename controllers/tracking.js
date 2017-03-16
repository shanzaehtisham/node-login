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

	var TrackingModel = dbcon.model('Tracking', model.profileSchema);
  
exports.add = function(req, res) {
	
	//console.log('JSON Received as : ' +req.body.data);
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
	
	
	console.log("req.body" , req.body);
	console.log('ObjectID received = ' + req.body.Object_ID);

	var idReceived = req.body.Object_ID.replace(/"/g, '');
	
	console.log('After parsing = ' + idReceived);
	
	var query = { "_id": new mongoose.Types.ObjectId(idReceived) };
	TrackingModel.update(query, { 
				"$set": 
				{
					"End_location_latlng": req.body.End_location_latlng,
					"End_location_name": req.body.End_location_name,
					"Journey_EndDateTime" : req.body.Journey_EndDateTime
				}
			},function(err, result){
		console.log('success');
		if (err) throw err;
		console.log('result of update = '+ result);
	});
	
	};

exports.updateRoute = function(req, res) {
	
};
