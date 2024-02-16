const { Router } = require('express');

const router = Router();


const etudiant = require('../database/schema/Etudiant-schema');
const { timeStamp } = require('console');

/**
 * Get student by email http://localhost:3000/etudiant/email
 */

router.get(
    '/:email',async (req,res)=>{
      
        const { email } = req.params;
        if(await etudiant.exists({ email: email })){
            const uno = await  etudiant.findOne({email:email}).exec();
            res.send(uno);
        }else{
            res.status(404).send({msg:"Student not found",status_code:res.statusCode,timeStamp:new Date()});
        }
                    
});
/**
 *  GET STUDENT BY ID
 */
router.get(
    '/find-by/:_id',async(req,res)=>{
        const {_id} = req.params;
        if(await etudiant.exists({_id:_id})){
                const existStudent = await etudiant.findOne({_id:_id});
                res.send(existStudent);
        } else{
            res.status(404).send({msg:"Student not found",status_code:res.statusCode,timeStamp:new Date   ()});
        }
    }
)
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
            res.status(400).send({msg:"Student already exist",status_code:res.statusCode,timeStamp:new Date()});
        }else{
            const newUser = await etudiant.create({telephone,nom_complet,email, classe});
            newUser.save();
            res.status(201).send({msg: "Student created successfuly",status_code:res.statusCode})
        }
    }
)

/**
 * Delete student by email
 * @param {string} email - email of the student to be deleted
 * @returns {{ msg: string; }} - an object containing a message
 */
router.delete('/:email',
async (req, res) => {
    const { email } = req.params;
  
    const deleteStudent = await etudiant.findOne({ email }).exec();
  
    if (!deleteStudent) {
      return res.status(404).send({ msg: 'Student not found',status_code:res.statusCode ,timeStamp:new Date()});
    }
  
    await etudiant.findOneAndDelete({ email });
    return res.status(202).send({ msg: 'Deleted successfully' ,status_code:res.statusMessage,timeStamp:new Date()});
  }
);
  
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
            res.status(400).send({msg: `Bad Request!!! Student with provided email ${email} was not found`,status_code:res.statusCode,timeStamp:new Date() });
        }

       
    }
)
module.exports = router;