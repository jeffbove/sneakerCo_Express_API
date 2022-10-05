const express = require('express');
const NewBalancesModel = require('../models/newBalancesModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const NewBalances = await NewBalancesModel.find();
        res.json(NewBalances);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:newBalanceId', async (req, res) => {
    try{
        const NewBalances = await NewBalancesModel.findById(req.params.newBalanceId)
          res.json(NewBalances);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;