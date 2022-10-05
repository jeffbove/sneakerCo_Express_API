const express = require('express');
const JacketsModel = require('../models/jacketsModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const Jackets = await JacketsModel.find();
        res.json(Jackets);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:jacketId', async (req, res) => {
    try{
        const Jackets = await JacketsModel.findById(req.params.jacketId)
          res.json(Jackets);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;