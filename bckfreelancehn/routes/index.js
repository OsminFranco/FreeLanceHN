var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});


router.get('/sec/login', async (req, res)=> {
  res.status(403).json({"msg":"No implementado"})
});


module.exports = router;
