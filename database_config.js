const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
const SECRET =  require("./constant");

const    uri = process.env.DATABASE_USER+SECRET+ process.env.DATABASE_HOST;

let connect_string =  mongoose
        .connect(uri)
        .then( ()=>   console.log("succesfully connect to DB") );

module.exports=connect_string;
module.exports=uri;