
var mongodb = require('mongodb'),
Schema = mongodb.Schema;

var profileSchema = new Schema({
	ProfileID : String,
    Name: String,
    Gender: String,
    Contact: {
        Phone: String,
        Phone: String
    },
    Service_provider: String,
    Email: String,
    Designation: String,
    
    Home_Address: String,

    Password: String,
    Color: String,
    Status: String,
    
    Conveyance_type: String,
    VIN: String,
    Model: String,
    Fuel_type: String,
    Fuel_consumption: String,
    
    Added_by: String,
    Added_on: Timestamp,
    Updated_by: String,
    Updated_on: Timestamp
});

mongodb.model('Profile', profileSchema);