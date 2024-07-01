const express= require('express')
const User_details= require('./Routes/user_details')
const connectDb = require('./util')
const app= express()

app.use(express.json())
app.use(User_details)
connectDb()
app.listen(3000, ()=>{
    console.log('Sever is running on port 3000')
})
; // Adjust the path as necessary


