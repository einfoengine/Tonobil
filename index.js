const express = require('express');

const indexRoute = require('./lib/routes/index');
const advertiseRoute = require('./lib/routes/advertise');
const salersRoute = require('./lib/routes/salers');
const {connectDb} = require('./lib/client/mongo');
connectDb();

const app = express();

app.use(express.json());
app.use('/', indexRoute);
app.use('/advertise', advertiseRoute);
app.use('/salers', salersRoute);

module.exports = app;
