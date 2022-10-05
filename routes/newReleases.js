const express = require('express');
const NewReleasesModel = require('../models/newReleasesModel')
const router = express.Router();


//all data
router.get('/', async (req,res) => {
    try{
        const NewReleases = await NewReleasesModel.find();
        res.json(NewReleases);
    }catch(err){
res.json({ message: err});
    }
});

//specific data
router.get('/:newReleasesId', async (req, res) => {
    try{
        const NewReleases = await NewReleasesModel.findById(req.params.newReleasesId)
          res.json(NewReleases);
    } catch(err){
        res.json({ message: err});
    }
   
})


module.exports = router;