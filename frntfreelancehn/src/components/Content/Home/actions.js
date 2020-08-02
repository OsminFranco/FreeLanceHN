import { naxios , paxios, setJWT} from '../../../utilities/axios';


export  const getEmpleo = async ()=> {

    const uri = '/';
    try{
      let result= await  naxios.get(uri);
      return result;
    }
    catch(e){
        throw e;
    }
     
}

export  const getPrivateEmpleo = async ()=> {

  const uri = '/private';
  try{
    let result= await  paxios.get(uri);
    return result;
  }
  catch(e){
      throw e;
  }
   
}