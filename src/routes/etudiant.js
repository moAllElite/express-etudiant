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
        const {telephone,nom_complet,email, classe} = req.body;
        const userDB = await etudiant.findOne({ 
            $or:[{email}]
        });
        if(userDB){
            res.status(400).send({msg:"Student already exist"})
        }else{
            const newUser = await etudiant.create({telephone,nom_complet,email, classe});
            newUser.save();
            res.status(201).send({msg: "Student created successfuly"})
        }
    }
)

/**
 * Delete student by email  http://localhost:3000/api/etudiants/{email}
 */
router.delete(
    '/:email',
    async(req,res) =>{
      const  {email} = req.params; 
      const deleteStudent = await etudiant.findOneAndDelete(email===email);
        if(!deleteStudent) {
            res.status(404).send({msg: "Student not found"});   
        }else{
            res.status(202).send({msg: "Deleted successfully"});
        }
    }
)

/**
 * Update Student by email http://localhost:3000/api/etudiants/{email}
 */
router.put(
    "/:email", async(req,res)=>{
        const {email}   = req.params;
        
        const existStudent = await etudiant.findOne({
            $or:[{email}]
        }
        );
        if(existStudent){
            const { telephone,nom_complet, classe} = req.body;
            const updateStudent = await etudiant.updateMany({telephone,nom_complet,classe});
            res.status(200).send(
                {
                    msg:"Student's datas updated successfully",
                    data:{  telephone,nom_complet, classe,email}
                }
            );
        }else{
            res.status(400).send({msg: `Bad Request!!! Student with provided email ${email} was not found` });
        }

       
    }
)
module.exports = router;