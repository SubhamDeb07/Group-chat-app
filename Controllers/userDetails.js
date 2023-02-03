const bcrypt = require('bcrypt')
const User = require('../Models/User')


exports.signUp = async(req, res, next)=>{
    console.log('Ready To Signup')

    try{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password
        const Number = req.body.Number

        const user = await User.findAll({where:{email}});
        if(user.length>0){
            return res.status(207).json({message:'user already exist'})
        }
      else{
        bcrypt.hash(password, 10, async(err, hash)=>{
            const data = await User.create({
                username,
                email,
                password:hash,
                Number
            })
            return res.status(201).json({newUserDetails: data})
        
        })
    }
    }
    
    
    catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
    
}