import { naxios , paxios, setJWT} from '../../../utilities/axios';

    
//setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbnlmcmFuY29fMjhAeWFob28uY29tIiwicm9sZXMiOlsicHVibGljIl0sIl9pZCI6IjVmMjc2MjQzYzMxMDE3MzU4Yzc3ZWFhYiIsImlhdCI6MTU5NjQxNjU5OSwiZXhwIjoxNTk2NDIzNzk5fQ.SlquWTwhhZOLKVTcWrnouh1N-Z28pCGZrTxlxtBhtNA')
export  const getEmpleo = async ()=> {

    const url = '/api/empleo/';
    try{
      let result= await  naxios.get(url);
      return result;
    }
    catch(e){
        throw e;
    }
     
}

export  const getPrivateEmpleo = async ()=> {

  const url = '/api/empleo/private';
  try{
    let result= await  paxios.get(url);
    return result;
  }
  catch(e){
      throw e;
  }
   
}