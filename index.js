var connect = require('connect'),
  mongodb = require('mongodb'),
  mongoose = require('mongoose'),
  express = require('express'),
  bodyparser = require('body-parser') ;
  var app = express();
  
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended: true}));
  
  var uri = "url";
  var MongoClient = require('mongodb').MongoClient;
  
  require('./routes.js')(app);
  require('./models/profile');
  require('./models/tracking');
  require('./models/logs');
  
  
  app.get('/', function (req, res) {
	  res.send("Hello People");	  
  });  
  
  app.listen(process.env.PORT, function(){
	  console.log("Listening on port"+process.env.PORT);	  
  });
