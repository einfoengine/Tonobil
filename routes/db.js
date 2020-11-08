var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { 
    name: String 
});

const kitty = new Cat({ name: 'Zildjian' });

kitty.save().then(() => console.log('meow'));

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("db router");
  res.send("This is db route");
//   res.render('index', { title: 'Express' });
});

module.exports = router;