
module.exports = function (app) {

	var profile = require('./controllers/profile');
	
	app.get('/profile', profile.findAll);
	//app.get('/profile/:id', profile.findByID);
	app.post('/profile', profile.add);

}