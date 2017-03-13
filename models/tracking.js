
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var profileSchema = new Schema({
    TrackingID: String,
    Journery_StartTime: Date,
    Journey_StartDate: Date,
    Start_location: String,
    End_location: String,
    Profile_ID: String,
    Route: {
      location:  String,
      time: Date  
    },
    Purpose: String,
    Purpose_ID: String
});

mongoose.model('Tracking', profileSchema);