const express= require('express')
const router= express.Router()
const User_details= require('../Controller/user_details')

router.get('/api/details', User_details.getDetails)

module.exports=router