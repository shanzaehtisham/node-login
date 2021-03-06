
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var profileSchema = new Schema({
	
	Profile_ID : String,
	
	UserName: String,
    Name: String,
    Gender: String,
	Password: String,
	
    Contact: {
        Phone: String,
        Phone: String
    },
	
    Service_provider: String,
    Email: String,
    Designation: String,
    
    Home_Address: String,
    
    Color: String,
    Status: String,
    
    Conveyance_type: String,
    VIN: String,
    Model: String,
    Fuel_type: String,
    Fuel_consumption: String,
    
    Added_by: String,
    Added_on: Date,
    Updated_by: String,
    Updated_on: Date
});

mongoose.model('Profile', profileSchema);