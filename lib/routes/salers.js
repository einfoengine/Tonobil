var express = require('express');
var router = express.Router();

// Model
const Salers = require('../models/salers');

/**
 * Routes
 */

router.get('/', async (req, res, next)=>{
  try{
    const salers = await Salers.find();
    console.log(JSON.stringify(salers));
    res.json(salers);
  }catch(e){res.send(e)}
});

// Create sater
router.post('/', async (req, res)=>{
  const saler= new Salers({
    "name": req.body.name,
    "contact": req.body.contact,
    "email": req.body.email,
    "address": req.body.address
  });
  try{
    const newSsler = await saler.save();
    console.log(newSsler);
    res.json(newSsler);
  }catch(e){
    console.log(e);
    res.send(e)
  }
  

  console.log('Console'+JSON.stringify(req.body));
  res.json(saler);
});

module.exports = router;
