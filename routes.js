
module.exports = function (app) {

	var profile = require('./controllers/profile');
	var tracking = require('./controllers/tracking');
	
	app.get('/profile', profile.findAll);
	//app.get('/profile/:id', profile.findByID);
	
	app.post('/profile', profile.add);
	
	app.post('/tracking/add', tracking.add);
	app.post('/tracking/updateEndLocation', tracking.updateEndLocation);
	//app.post('/tracking/updateRoute', tracking.updateRoute);
	

}