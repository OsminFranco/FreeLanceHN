const express = require('express');
let router = express.Router();
const model = require('./empleo.model');

const init = async ()=>{
  await model.initModel();
}
init();

router.get('/all', async (req, res)=> {
  try{
    let empleo = await model.getAll();
    res.status(200).json(empleo);
  }catch(err){
    console.log(err);
    res.status(500).json({"Error":"Algo salio mal"});
  }
  
});


router.post('/new', async (req, res)=> {
  try{
    let {titulo,descripcion,categoria,contacto} = req.body;
   const rslt = await model.addOne(titulo,descripcion,categoria,contacto);
   res.status(200).json(rslt);
  } 
  catch(err){
    console.log(err);
    res.status(500).json({"Error":"Algo salio mal"});
  }
});

router.get('/one/:id', async (req, res)=>{
  try{
      let {id} = req.params;
      let cuenta = await model.getOne(id);
      res.status(200).json(cuenta);
  }catch(err){
    console.log(err);
    res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
  }
}); 


router.get('/categoria/:categoria', async (req, res) => {
  try {
    let { categoria } = req.params;
    let rcat = await model.getBycategoria(categoria);
    res.status(200).json(rcat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
  }
}); //get one

router.delete ('/del/:id', async (req, res)=>{
  try {
      const {id} = req.params;
      const result = await model.deleteOne(id);
      res.status(200).json(result);
  }catch(err){
    console.log(err);
    res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
  }
});


module.exports = router;


