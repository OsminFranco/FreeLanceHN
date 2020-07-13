var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', async (req, res)=> {
  res.status(403).json({"msg":"pantalla principal"})
});






module.exports = router;
