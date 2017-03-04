var connect = require('connect'),
  mongo = require('mongodb');
  mongoose = require('mongoose');

// Connect to a mongo database via URI
// With the MongoLab addon the MONGOLAB_URI config variable is added to your
// Heroku environment.  It can be accessed as process.env.MONGOLAB_URI

//mongoose.connect(process.env.MONGOLAB_URI);
  
  
  var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://shanzadb:Indushospital1@ds058369.mlab.com:58369/fyp", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
	 db.collection('Persons', function 	 (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
	 
                
});

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