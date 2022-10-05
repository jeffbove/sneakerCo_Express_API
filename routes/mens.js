const express = require('express');
const mensModel = require('../models/mensModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const mens = await mensModel.find();
        res.json(mens);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:mensId', async (req, res) => {
    try{
        const mens = await mensModel.findById(req.params.mensId)
          res.json(mens);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;