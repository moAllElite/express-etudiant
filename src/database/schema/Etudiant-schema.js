const mongoose = require('mongoose');

const EtudiantSchema = mongoose.Schema({

    telephone:{
        type: mongoose.SchemaTypes.String,
        require:[true,'User phone number required'],  
       
    },
    nom_complet: {
        type: mongoose.SchemaTypes.String,
        require:true,  
    },
    email:{
        type: mongoose.SchemaTypes.String,
        require:true,  
    },
    classe:{
        type: mongoose.SchemaTypes.String,
        require:true,  
    },
    createdAt: {
            type: mongoose.SchemaTypes.Date,
            require:true,  
            default:new Date(),
    },

});

module.exports= mongoose.model("etudiants",EtudiantSchema)