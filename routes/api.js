const express  = require('express'),
      mongoose = require('mongoose')
      router   = express.Router()
      require('../mongo/mongo')
      require('../mongo/model/Model')
const User = mongoose.model('User')

//Queries
//GET 
router.get('/data/api',async(req,res)=>{
    try{
        const user = await User.find({})
        res.send(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})

//POST
router.post('/data/api',async(req,res)=>{
    try{
        const user = new User({
         name : req.body.name ,
         message : req.body.message    
        })
       await user.save()
        res.send(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})

//PUT 
router.put('/data/api/:id',async(req,res)=>{
    try{
    let {name,message} = req.body
    const user = await User.findByIdAndUpdate({_id:req.params.id},{name,message},{new:true, runValidators:true})
    res.send(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})


//DELETE
router.delete('/data/api/:id',async(req,res)=>{
    try{
    const user = await User.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(user)
    res.json(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})





module.exports = router 