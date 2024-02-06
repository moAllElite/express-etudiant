var express = require('express');
const app = express();
const uri =  require("../database_config");
require('dotenv').config() // import env configs
const studentRoute = require('./routes/etudiant'); //import all routes from etudiant.js
var { connect_string } = require('../database_config');// CONNECTION STRING




connect_string;

app.use(express.json());
app.use("/api/etudiants",studentRoute); //default url http:localhost:3000/api/etudiant


app.listen(process.env.PORT,()=>
    console.log('votre serveur est sur le port  ', process.env.PORT)
);

