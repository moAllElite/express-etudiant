const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');

const    uri = process.env.DATABASE_URL;

let connect_string =  mongoose
        .connect(uri)
        .then( ()=>   console.log("succesfully connect to DB") );

module.exports=connect_string;
module.exports=uri;