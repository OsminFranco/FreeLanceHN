var express= require('express');
var router = express.Router();
var passport = require('passport');
var passportJWT = require('passport-jwt');

var extractJWT = passportJWT.ExtractJwt;
var strategyJWT = passportJWT.Strategy;

passport.use( 
    new strategyJWT(
      {
          jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
          secretOrKey: process.env.JWT_SECRET
      },
      (payload, next)=>{
        var user = payload;
        console.log(user);
        return next(null, user);
      }
    )
  )

var secRoutes = require('./sec');
//var empleoRoutes = require('./empleo');
//var {pub, priv } = require('./home');
var {pub, priv} = require("./empleo")


//publicas
router.use("/sec", secRoutes);
router.use("/empleo", pub);
//router.use("/home", pub);
const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});

//privado
//router.use("/home", jwtAuthMiddleware , priv);
router.use("/empleo", jwtAuthMiddleware, priv)

module.exports = router;