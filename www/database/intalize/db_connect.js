"use strict";

let mongoose            = require('mongoose');
const databaseConfig    = require('../../config/cf_database');
const cfMode            = require('../../config/cf_mode');

let mongodUrl = "";
if (cfMode.database_product) {
    mongodUrl = `mongodb+srv://${databaseConfig.product._mongod_user}:${databaseConfig.product._mongodb_pass}@booking.foljiqe.mongodb.net/booking-be?retryWrites=true&w=majority`;
    // mongodUrl = `${databaseConfig.product._mongod_user === '' ? 'mongodb://' + databaseConfig.product._mongodb_host + ':' + databaseConfig.product._mongodb_port + '/' + databaseConfig.product._mongod_name :
    //     'mongodb://' + databaseConfig.product._mongod_user + ':' + databaseConfig.product._mongodb_pass + '@' + databaseConfig.product._mongodb_host + ':' + databaseConfig.product._mongodb_port + '/' + databaseConfig.product._mongod_name}`;
 }
else {
    mongodUrl = `${databaseConfig.development._mongod_user === '' ? 'mongodb://' + databaseConfig.development._mongodb_host + ':' + databaseConfig.development._mongodb_port + '/' + databaseConfig.development._mongod_name :
            'mongodb://' + databaseConfig.development._mongod_user + ':' + databaseConfig.development._mongodb_pass + '@' + databaseConfig.development._mongodb_host + ':' + databaseConfig.development._mongodb_port + '/' + databaseConfig.development._mongod_name}`;
}
mongoose = mongoose.createConnection(mongodUrl, { useCreateIndex: true, useNewUrlParser: true });
module.exports = mongoose;