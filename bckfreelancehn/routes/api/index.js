var express= require('express');
var router = express.Router();

var secRoutes = require('./sec');
var empleoRoutes = require('./empleo');

router.use("/sec", secRoutes);
router.use("/empleo", empleoRoutes);

module.exports = router;