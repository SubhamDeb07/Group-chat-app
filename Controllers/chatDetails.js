
const { Model } = require('sequelize');
const Chat = require('../Models/Chatting')

const Users = require('../Models/User');
const sequelize = require('sequelize')



exports.postMessage = async(req,res,next)=>{
    const{message} = req.body;

    try{
      if(!message){
        return res.status(400).json({message:'nothing entered'})
      }
      else{
        const data = await Chat.create({
          message:message,
          UserId: req.user.id,
          username: req.user.username
        })
        
  
        res.status(200).json({message: data})
  
      }
    
    
  
    }
  
    catch(error){
      res.status(500).json(error);
    }
  
  }

  exports.getMessage = async(req,res,next)=>{
     try{
     const data = await Chat.findAll({
      include: [
        {
        model: Users,
        as: 'User'


        }]
      
     }) 
    res.status(201).json(data);
    }
    catch(error) {
      console.log(error);
      res.status(500).json({error:error});
    }
  }