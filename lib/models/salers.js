const mongoose = require('mongoose');
const {Schema} = mongoose;

const salersScema = new Schema({
    date: { type: Date, default: Date.now },
    name: String,
    contact: Number,
    email: String,
    address: String
})

// 

module.exports = mongoose.model('salers', salersScema);