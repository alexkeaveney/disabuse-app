const express = require('express');
const app = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
var db;

MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {

    //if there is an error log it
    if (err) { console.log(err); }
    //if there are no errors
    else {
        //set db object to 'cheat' database
        db = database.db('disabuse');
    }

    //listen for requests to db on port 8000
    app.listen(8000, () => {
        console.log('Database connected');
    });
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/sections', (req, res) => {
  // Get sections from the mock api
  // This should ideally be replaced with a service that connects to MongoDB

  db.collection("sections").find({}).toArray(function(err, result) {
      if (err) throw err;
            //console.log(result);
            res.status(200).json(result);
            //db.close();
    });



  // axios.get(`${API}/posts`)
  //   .then(sections => {
  //     res.status(200).json(sections.data);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   });
});



module.exports = router;
