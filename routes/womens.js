const express = require('express');
const womensModel = require('../models/womensModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const womens = await womensModel.find();
        res.json(womens);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:womensId', async (req, res) => {
    try{
        const womens = await womensModel.findById(req.params.womensId)
          res.json(womens);
    } catch(err){
        res.json({ message: err});
    }
   
})

module.exports = router;