
module.exports = function (app) {

	var profile = require('./controllers/profile');
	var tracking = require('./controllers/tracking');
	
	// profile
	app.get('/profile', profile.findAll);
	app.post('/profile', profile.add);
	app.post('/login', profile.login);
	app.post('/tracking/add', tracking.add);
	
	//tracking
	app.post('/tracking/add', tracking.add);
	app.post('/tracking/updateEndLocation', tracking.updateEndLocation);
	app.post('/tracking/updateRoute', tracking.updateRoute);
	

}