const { Router } = require('express');

const router = Router();


const etudiant = require('../database/schema/Etudiant-schema')

/**
 * Get student by email http://localhost:3000/etudiant/email
 */

router.get(
    '/:email',async (req,res)=>{
      
        const { email } = req.params;
        if(await etudiant.exists({ email: email })){
            const uno =await  etudiant.findOne({email:email}).exec();
            res.send(uno);
        }else{
            res.status(404).send({msg:"Student not found"});
        }
                    
});

/**
 * Get all students
 */

router.get(
    '/',async(req,res)=>{
       const all =await  etudiant.find({});
        res.send(all);
                
});

/**
 * POST new student http://localhost:3000/api/etudiants
 */


router.post('/',
    async(req,res)=>{
        const {  telephone,nom_complet,email, classe} = req.body;
        const userDB = await etudiant.findOne({ 
            $or:[{email}]
        });
        if(userDB){
            res.status(400).send({msg:"Student already exist"})
        }else{
            const newUser = await etudiant.create( {  telephone,nom_complet,email, classe});
            newUser.save();
            res.status(201).send({msg: "Student created successfuly"})
        }
    }
)
module.exports = router;