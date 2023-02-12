const express = require("express");
const router = express.Router();
const Alien = require('../models/alien')


// using async request so that it will not block our process
router.get("/", async(req, res) => {
try{

    const aliens = await Alien.find()
    res.json(aliens)
 
}catch(err){
    //err=> object
    res.send('Error' + err)
    console.log(err)
}
    
});


router.get("/:id", async(req, res) => {
    try{
    
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
     
    }catch(err){
        //err=> object
        res.send('Error' + err)
        console.log(err)
    }
        
    });



router.post('/',async(req,res)=>{
const alien = new Alien({
    name:req.body.name,
    tech:req.body.tech,
    sub:req.body.sub
})
try{
   const a1 = await alien.save()
res.json(a1)
}catch(err){
    console.log(err)
}
})


router.patch('/:id',async(req,res)=>{
    try{
      const alien=await Alien.findById(req.params.id)
      alien.sub = req.body.sub
      const a1 =await alien.save()
      res.json(a1)
    }catch(err){
        res.send('ERROR')
        console.log(err)
    }
})



router.delete('/:id',async(req,res)=>{
    try{
      const alien=await Alien.findById(req.params.id)
      const a1 =await alien.remove()
      res.json(a1)
    }catch(err){
        res.send('ERROR')
        console.log(err)
    }
})

module.exports = router;
