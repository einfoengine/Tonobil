const mongoose = require('mongoose');
const {Schema} = mongoose;

const advertiseScema = new Schema({
    date: { type: Date, default: Date.now },
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
})

// 

module.exports = mongoose.model('adertise', advertiseScema);