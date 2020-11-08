var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tonobil', {useNewUrlParser: true, useUnifiedTopology: true});

const Car = mongoose.model('Advertise_Schema', { 
    title: string,
    basePrice: number,
    onTheRoadPrice: number,
    Type: string,
    Brand:  string,
    Model:  string,
    Variant: string,
    Year:  number,
    Transmission:  string,
    Engine: number,
    Seat_capacity:  number,
    MIleage:  number,
    Color:  string,
    Specification:  object,
    Equipment:  object,
    Seller:   object,
    CreatedAt:  Date,
    UpdatedAt:  Date,
    OtherDetail:  string
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