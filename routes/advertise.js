const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log("Advertise router");
    res.send('Ads router');
});

module.exports = router;