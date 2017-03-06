var connect = require('connect'),
  mongo = require('mongodb'),
  mongoose = require('mongoose'),
  express = require('express'),
  bodyparser = require('body-parser') ;
  

  var uri = "mongodb://shanzadb:Indushospital1@ds058369.mlab.com:58369/fyp";
  var MongoClient = require('mongodb').MongoClient;
  var app = express();
  
  app.use(bodyparser.json());

  app.get('/', function (req, res) {
	  res.send("Hello People");	  
  });

  
  app.post('/', function (req, res) {
	  res.send("Normal Post");
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;

		 //Write databse Insert/Update/Query code here..
		 db.collection('Persons', function(err, collection) {
			
			collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
			collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
			collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
			
			db.collection('Persons').count(function (err, count) {
				if (err) throw err;
				
				console.log('Total Rows: ' + count);
			});
		});
               
		 
	});
	
  });
  
  app.post('/listall', function (req, res) {
	  res.send("List All");
	  
	  var items;
	  
	  MongoClient.connect(uri, function (err, db) {
   
		 if(err) throw err;
		 
		 db.collection('Persons', function(err, collection) {
			 
             collection.find().toArray(function(err, items) {
				 console.log(items);
				 
             });
			 
         });
		 
	  });
	  
	  return res.json(items);
	  //res.send(items);
  });
  
  
  app.listen(process.env.PORT, function(){
	  console.log("Listening on port"+process.env.PORT);	  
  });
  
  

// Connect to the db




/*
mongo.connect(process.env.MONGOLAB_URI,  {},function(error, db){

  // console.log will write to the heroku log which can be accessed via the 
  // command line as "heroku logs"
  
  
  db.addListener('error', function(error){
    console.log("Error connecting to MongoLab");
  });
 
  
  
	  db.createCollection('requests', function(err, collection){
		  
		db.collection('requests', function(err, collection){
		  var requestCollection = collection;
		  connect(
			connect.favicon(),                    // Return generic favicon
			connect.query(),                      // populate req.query with query parameters
			connect.bodyParser(),                 // Get JSON data from body
			function(req, res, next){             // Handle the request
			  res.setHeader("Content-Type", "application/json");
			  if(req.query != null) {
				requestCollection.insert(req.query, function(error, result){
				  // result will have the object written to the db so let's just
				  // write it back out to the browser
				  res.write(JSON.stringify(result));
				});
			  }
			  
			  res.end();
			}
		  ).listen(process.env.PORT || 8080);
		  // the PORT variable will be assigned by Heroku
		});

	});
  
});
*/

