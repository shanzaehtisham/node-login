var connect = require('connect'),
  mongo = require('mongodb'),
  mongoose = require('mongoose'),
  express = require('express'),
  bodyparser = require('body-parser') ;
  var app = express();
  
  require('./routes.js')(app);
  require('.model/persons');
  
  var uri = "mongodb://shanzadb:Indushospital1@ds058369.mlab.com:58369/fyp";
  var MongoClient = require('mongodb').MongoClient;
  
  
  app.use(bodyparser.json());

  app.get('/', function (req, res) {
	  res.send("Hello People");	  
  });  
  
  app.listen(process.env.PORT, function(){
	  console.log("Listening on port"+process.env.PORT);	  
  });
