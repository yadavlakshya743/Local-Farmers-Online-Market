require('dotenv').config()
const mongoose = require('mongoose')


const connectDB = async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected")
    }catch(error){
        console.log("error happen mongodb not connect successfull")
    }
}
module.exports = connectDB;

