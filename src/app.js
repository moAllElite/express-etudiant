const express = require('express');
const appli = express();
const uri =  require("./database/database_config");
require('dotenv').config() // import env configs
const studentRoute = require('./routes/etudiant'); //import all routes from etudiant.js
const { connect_string } = require('./database/database_config');// CONNECTION STRING



appli.use(express.json());
appli.use(process.env.URL,studentRoute); //default url http:localhost:3000/api/etudiant


appli.listen(process.env.PORT,()=>
    console.log('votre serveur est sur le port  ', process.env.PORT)
);

