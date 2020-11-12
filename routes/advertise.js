const express = require('express');
const router = express.Router();

router.get('/', async(req, res, next)=>{
    // try{

    // }
    console.log("Advertise router");
    res.send('Ads router');
});

module.exports = router;