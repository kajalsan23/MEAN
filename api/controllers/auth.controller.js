import User from '../models/User.js';
import Role from '../models/Role.js';


export const createUser = async (req,res,next)=>{
    const role =  await Role.find({role:'User'})
    const newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
        roles:role
    })

    await newUser.save();
    return res.status(200).send("User is Created")
}