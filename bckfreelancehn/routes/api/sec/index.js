
const express = require('express');
let router = express.Router();

router.get('/sec/login', async (req, res)=> {
  res.status(403).json({"msg":"No implementado login"})
});


router.get('/sec/signin', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});



module.exports = router;


