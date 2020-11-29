const express = require('express');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const config = require('./config')();

const indexRoute = require('./lib/routes/index');
const advertiseRoute = require('./lib/routes/advertise');
const salersRoute = require('./lib/routes/salers');


// App
const app = express();
mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.db}`, {useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', ()=>{
  console.log("Mongo DB connected!");
});


// Use
app.use(express.json());
app.use('/',indexRoute);
app.use('/advertise', advertiseRoute);
app.use('/salers', salersRoute);

app.listen(3000, ()=>{

});

// Export
module.exports = app;
