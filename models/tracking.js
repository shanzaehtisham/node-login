
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var profileSchema = new Schema({
    
	Tracking_ID: String,
    Profile_ID: String,
	
	Journey_StartDateTime: Date,
	Journey_EndDateTime: Date,

    Start_location_latlng: String,
	Start_location_name: String,
	
    End_location_latlng: String,
	End_location_name: String,
    
	Route: {
      crnt_location_latlng:  String,
	  crnt_location_name:  String,
      crnt_time: Date  
    },
	
    Purpose: String,
    Purpose_ID: String
});

//module.exports.profileModel = mongoose.model('Tracking', profileSchema);
module.exports.profileSchema = profileSchema;