const express = require('express');
const AirForce1s = require('../models/airForce1Model')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const AirForce1 = await AirForce1s.find();
        res.json(AirForce1);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:airForce1Id', async (req, res) => {
    try{
        const AirForce1 = await AirForce1s.findById(req.params.airForce1Id)
          res.json(AirForce1);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;