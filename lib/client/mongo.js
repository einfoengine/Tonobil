const mongoose = require('mongoose');
const config = require('../../config')();

const url = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.db}`;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const connectDb = () => {
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected');
    });
  
    mongoose.connection.on('error', (err) => {
      console.log('Mongoose default connection error: ', err);
    });
  
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose default connection disconnected');
    });
  
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0);
      });
    });
  
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
};  

module.exports = {
    connectDb
};
  