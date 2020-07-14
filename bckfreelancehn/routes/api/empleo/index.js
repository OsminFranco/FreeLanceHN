const express = require('express');
let router = express.Router();
const model = require('./empleo.model');
const { initModel } = require('./empleo.model');

const init = async()=>{
  await model,initModel();

}
//init(); 



router.get('/all', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.get('/one/:id', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.put('/aplicar/:id', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.post('/new', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.put('/categoria/:categoria', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});



module.exports = router;


