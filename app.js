const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
require('dotenv').config()

const sequelize = require('./util/database')


const userRoute = require('./Routes/userRoute')
const chatRouter = require('./Routes/chatRoute')



const Users = require('./Models/User')
const Chat = require('./Models/Chatting')




const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.use(userRoute)
app.use(chatRouter)


app.use((req,res)=>{
    res.sendFile(path.join(__dirname, `/Views/${req.url}`))
})


Users.hasMany(Chat);
Chat.belongsTo(Users);



sequelize.sync({force: false}).then(result =>{
    console.log('Server started at 3000');
    app.listen(process.env.PORT || 3000); 
}).catch(err=>{
    console.log(err);
}); 