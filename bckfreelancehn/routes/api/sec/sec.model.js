const db = require('../../dao/db');
const objectId = require('mongodb').objectId;
const bcrypt = require('bcrypt');

let userColl;

module.exports = class{
  static async initModel(){
    if(!userColl) {
      let _db = await db.getDB();
      userColl = await _db.collection('usuarios');
      if(process.env.ENSUREINDEX !== "1"){
        console.log('Creando indices de Usuarios');
        await userColl.ensureIndex({"email":1},{unique:true});
      }
      console.log("Coleccion de Usuarios asignados");
      return;
    }else{
      return;
    }
  }//init model

  static async addnew( data ){
    const {email, password } = data;
    try {
      let newUser = {
              "email": email,
              "password" : bcrypt.hashSync(password, 10),
              "lastlogin" : null,
              "lastpasswordchanged" : null,
              "passwordexpires" : new Date().getTime() + (1000 * 60 * 60 * 24 * 90),
              "oldpasswords": [],
              "roles": [ "public" ]
      }
      let rslt = await userColl.insertOne(newUser);
      return rslt;
    } catch (err){
      console.log(err);
      return err;
    }
  } // addnew

  static async getByEmail(email){
    try {
        let filter = {"email": email};
        let user = await userColl.findOne(filter);
        return user;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  static async comparePassword( rawPassword, cryptedPassword) {
    try {
      return bcrypt.compareSync(rawPassword, cryptedPassword);
    }catch (err){
      return false;
    }
  }


}