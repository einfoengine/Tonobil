// Express basic
const express = require('express');

// Hapi Joi
const Joi = require('@hapi/joi');

// Mongo / Mongoose [Database]
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/tonobil';

// App
const app = express();
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', ()=>{
  console.log("Mongo DB connected!");
});

// Routers
const indexRoute = require('./lib/routes/index');
const advertiseRoute = require('./lib/routes/advertise');
const salersRout = require('./lib/routes/salers');

// Use
app.use(express.json());
app.use('/',indexRoute);
app.use('/advertise', advertiseRoute);
app.use('/salers', salersRout);

app.listen(3000, ()=>{

});

// Export
module.exports = app;