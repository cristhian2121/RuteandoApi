const MongoClient = require('mongodb').MongoClient;
const mongoUri = 'mongodb://localhost:27017/Ruteando';

MongoClient.connect(mongoUri, function(err, client){

})

module.exports = {
    // Database connection information
    'database': mongoUri,
    // Setting port for server
    'port': process.env.PORT || 3000,
};