const express = require('express');
const MostPopularModel = require('../models/mostPopularModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const MostPopular = await MostPopularModel.find();
        res.json(MostPopular);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:mostPopularId', async (req, res) => {
    try{
        const MostPopular = await MostPopularModel.findById(req.params.mostPopularId)
          res.json(MostPopular);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;