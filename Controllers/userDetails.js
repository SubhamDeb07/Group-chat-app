const bcrypt = require('bcrypt')
const User = require('../Models/User')
const jwt = require('jsonwebtoken')



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


function generateToken(id, username){
    return jwt.sign({UserId: id, username: username}, 'HiToken!')
}


exports.loginUser = async(req, res, next)=>{
    try{
        const {email, password} = req.body
        const user = await User.findAll({where:{email}})
        
        if(user.length > 0){
            bcrypt.compare(password, user[0].password, (err, match)=>{
            if(match){
                return res.status(201).json({message: 'Login Successful!', token: generateToken(user[0].id, user[0].username)})
            }
            else{
                return res.status(400).json({message: 'wrong password'})
            }
        })
        }
 
        else{
            return res.status(207).json({message: 'User not found'})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
}





exports.getUsers = async(req, res, next)=>{
    console.log('Getting Users');
    try{
        const SignedUser = await User.findAll()
        res.status(201).json(data)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error})
    }
}

