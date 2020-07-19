const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;

let empleoColl;

module.exports = class {
    static async initModel(){
      if(!empleoColl) {
        let _db = await db.getDB();
        empleoColl = await _db.collection('Empleo');
        console.log("Coleccion de Empleo asignados");
        return;
      }else{
        return;
      }
    }//iniciar


    static async getAll(){
      if(empleoColl){
        let registro = await  empleoColl.find();
        return registro.toArray();
      }
      return [];
    }


  

      static async addOne(titulo,descripcion,categoria,contacto ) {
        try{
          const newEmpleo = {titulo:titulo,descripcion:descripcion,categoria:categoria,contacto:contacto };
          const result = await empleoColl.insertOne(newEmpleo);
          return result;
        }catch(err){
          console.log(err);
          return err;
        }
      }//agregar un nuevo empleo


      static async getOne(id) {
        try {
          let filter = { "_id": new ObjectId(id)};
          const result = await empleoColl.findOne(filter);
          return result;
        } catch (err) {
          console.log(err);
          return err;
        }
      }

      static async getBycategoria(categoria) {
        try {
          let filter = { "categoria": categoria };
          // const result = await empleoColl.find({"categoria":filter}); 
          const result = await empleoColl.findOne(filter);
          return result;
        } catch (err) {
          console.log(err);
          return err;
        }
      } //get by Cuenta

      static async deleteOne(id){
        try{
          let filter = {"_id": new ObjectId(id)};
          const result = await empleoColl.deleteOne(filter);
          return result;
        }catch(err){
          console.log(err);
          return err;
        }
      }
    




}