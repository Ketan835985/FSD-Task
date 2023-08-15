/* eslint-disable no-undef */
const router = require('express').Router();
const userModel = require('../model/userModel');


router.post('/userCreate', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).send({status: false, message: 'Please enter all the fields'}) 
        }
        const emailCheck = await userModel.findOne({email});
        if(emailCheck){
            return res.status(400).send({status: false, message: 'Email already exists'})
        }
        const user = await userModel.create({name, email, password});
        res.status(201).send({status: true, message: 'User Created Successfully', data: user})
    }catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
})


router.post('/userLogin', async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).send({status: false, message: 'Please enter all the fields'})
        
        }
        const user = await userModel.findOne({email, password});
        if(!user){
            return res.status(404).send({status: false, message: 'User not found'})
        }
        res.status(200).send({status: true, message: 'User Logged In Successfully'})
    }
    catch (error) {
        res.send(500).json({status: false, message: error.message})
    }
})


router.delete('/userDelete', async (req, res) => {
    try {
        const userEmail = req.body;
        if(!userEmail){
            return res.status(400).send({status: false, message: 'Please Login first'})
        }
        const user = await userModel.findOneAndDelete({email: userEmail});
        if(!user){
            return res.status(404).send({status: false, message: 'User not found'})
        }
        res.status(200).send({status: true, message: 'User Deleted Successfully'})
    }
     catch (error) {
        res.send(500).json({ status: false, message: error.message })
    }
}
)


module.exports = router;