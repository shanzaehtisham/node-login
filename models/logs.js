
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var logsSchema = new Schema({
	Profile_ID : String,
    Updated_on: Date,
	Activity: String
});

mongoose.model('Logs', logsSchema);