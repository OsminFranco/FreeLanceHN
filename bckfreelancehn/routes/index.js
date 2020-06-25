var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});


router.get('/sec/login', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.get('/sec/signin', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.get('/Empleo/all', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.post('/Empleo/new', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});

router.put('/Empleo/one/:id', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});


module.exports = router;
