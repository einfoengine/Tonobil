var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tonobil', {useNewUrlParser: true, useUnifiedTopology: true});

const Car = mongoose.model('Advertise_Schema', { 
    title: String,
    basePrice: Number,
    onTheRoadPrice: Number,
    type: String,
    Brand:  String,
    Model:  String,
    Variant: String,
    Year:  Number,
    Transmission:  String,
    Engine: Number,
    Seat_capacity:  Number,
    MIleage:  Number,
    Color:  String,
    Specification:  Object,
    Equipment:  Object,
    Seller:   Object,
    CreatedAt:  Date,
    UpdatedAt:  Date,
    OtherDetail:  String
    // Specification

});

const toyota = new Car({ name: 'alion' });

toyota.save().then(() => console.log('voom'));

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("db router");
  res.send("This is db route");
//   res.render('index', { title: 'Express' });
});

module.exports = router;