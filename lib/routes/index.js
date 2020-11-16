const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
  console.log("Hello index!");
  res.send("Hello index");
});

module.exports = router;