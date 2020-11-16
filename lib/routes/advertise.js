
const express = require('express');
const router = express.Router();

const Advertises = require('../modls/advertise');

router.get('/', async(req, res)=>{
    try{
        const advertises = await Advertise.find();
        res.json(advertises);
    }catch(e){
        res.send('Res: '+e);
    }
    console.log("Advertise router");
    res.send('Ads router');
});
router.get('/:id', async(req, res)=>{
    try{
        const advertise = await Advertises.findById(req.params.id);
        res.json(advertise);
    }catch(e){
        res.send('Res: '+e);
    }
    console.log("Advertise router");
    res.send('Ads router');
});

router.post('/', async(req, res)=>{
    const advertises= new Advertises({
        title: req.body.title,
        basePrice: req.body.basePrice,
        onTheRoadPrice: req.body.onTheRoadPrice,
        type: req.body.type,
        brand:  req.body.brand,
        model:  req.body.model,
        variant: req.body.variant,
        year:  req.body.year,
        transmission:  req.body.transmission,
        engine: req.body.engine,
        seat_capacity:  req.body.seat_capacity,
        mileage:  req.body.mileage,
        color:  req.body.color,
        specification:  req.body.specification,
        equipment:  req.body.equipment,
        seller:   req.body.seller,
        createdAt:  req.body.createdAt,
        updatedAt:  req.body.updatedAt,
        otherDetail:  req.body.otherDetail
    });
    try{
        const addData = await advertises.save();
        res.json(addData);
    }catch(e){
        res.send(e);
    }
});

router.patch('/:id', async(req, res)=>{
    try{
        const advertise = await Advertises.findById(req.params.id);
        res.json(advertise);
    }catch(e){
        res.send('Res: '+e);
    }
    console.log("Advertise router");
    res.send('Ads router');
});


module.exports = router;
