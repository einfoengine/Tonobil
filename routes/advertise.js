const express = require('express');
const router = express.Router();

const Advertise = require('../modls/advertise');

router.get('/', async(req, res, next)=>{
    try{
        const advertise = await Advertise.find();
        res.json(advertise);
    }catch(e){
        res.send('Res: '+e);
    }
    console.log("Advertise router");
    res.send('Ads router');
});

module.exports = router;