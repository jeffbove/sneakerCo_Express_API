const express = require('express');
const KidsModel = require('../models/kidsModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const Kids = await KidsModel.find();
        res.json(Kids);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:kidsId', async (req, res) => {
    try{
        const Kids = await KidsModel.findById(req.params.kidsId)
          res.json(Kids);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;