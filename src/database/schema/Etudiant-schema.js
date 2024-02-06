const mongoose = require('mongoose');

const EtudiantSchema = mongoose.Schema({

    telephone:{
        type: mongoose.SchemaTypes.String,
        require:[true,'User phone number required'],  
        validator:(v) => {
            return  /^[+]*[(]?[0-9]?[)]?[-\s/0-9]*$/g.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
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