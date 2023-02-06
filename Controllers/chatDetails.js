
const Chat = require('../Models/Chatting')

const User = require('../Models/User');



exports.postMessage = async(req,res,next)=>{
    const{message} = req.body;

    try{
      if(!message){
        return res.status(400).json({message:'nothing entered'})
      }
      else{
        const findName = await User.findAll({where: {username}})
        console.log('----------', findName)
        const data = await Chat.create({
          message:message,
          username: findName,
          UserId: req.user.id
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
      
     const data =  await Chat.findAll()
     
     res.status(201).json(data);
    }
    catch(error) {
      console.log(error);
      res.status(500).json({error:error});
    }
  }