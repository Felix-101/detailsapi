const mongoose= require('mongoose')


const connectDb= async()=>{
    try{
       await mongoose.connect('mongodb+srv://Admin:UvZgJjEguJFg9ZFO@cluster0.c2h2gsm.mongodb.net/HNG').then(()=> console.log("Connection to db succesful"))
    } catch(err){
        console.log(err)
        console.log('Failed to connect to db')
        err.statusCode = 500
        process.exit(1)
        return next(err)
    }
}

module.exports = connectDb