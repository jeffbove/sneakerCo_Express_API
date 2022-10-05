const express = require('express');
const Jordan4sModel = require('../models/jordan4sModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const Jordan4 = await Jordan4sModel.find();
        res.json(Jordan4);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:jordan4Id', async (req, res) => {
    try{
        const Jordan4 = await Jordan4sModel.findById(req.params.jordan4Id)
          res.json(Jordan4);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;