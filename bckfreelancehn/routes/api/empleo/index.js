const express = require('express');
let router = express.Router();



router.get('/Empleo/all', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.get('/Empleo/one/:id', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.put('/Empleo/aplicar/:id', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.post('/Empleo/new', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.put('/Empleo/one/:id', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});



module.exports = router;


