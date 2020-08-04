import axios from 'axios';

const publicaxios = axios.create();
publicaxios.defaults.headers.common['cahe-control']="no-cahe";
publicaxios.defaults.headers.post['Content-Type']="no-cahe";
publicaxios.defaults.headers.put['Content-Type']="no-cahe";

const privateaxios = axios.create();
privateaxios.defaults.headers.common['cahe-control']="no-cahe";
privateaxios.defaults.headers.post['Content-Type']="no-cahe";
privateaxios.defaults.headers.put['Content-Type']="no-cahe";

 export const setJWT = ( jwt )=>{   // (jwt, logoutHandler)=>{

        privateaxios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}



export const setUnAuthInterceptor =  ( logoutHandler)=>{
    privateaxios.interceptors.response.use(
      (response)=>{
        return response;
      },
      (error)=>{
        console.log(error);
        if(error.response){
          switch(error.response.status){
            case 401:
              logoutHandler();
              break;
            default:
              console.log(error);
          }
        }else{
          console.log(error);
        }
        return Promise.reject(error);
      }
    )
  }
  


export const naxios = publicaxios;
export const paxios = privateaxios;

const localStorageAvailable = (
    ()=>{
        let t="t";
        try{

            localStorage.setItem(t,t);
            localStorage.removeItem(t);
            return true;
        }catch(e){
            return false;

        }
    }
)()

export const getLocalStorage = (key)=>{
    if(localStorageAvailable){

        return localStorage.getItem(key);
    }else{

        return null; 
    }
}

export const setLocalStorage = (key, value)=>{
    if(localStorageAvailable){

        localStorage.setItem(key, value);
        return true;
    }else{

        return false;
    }
}

export const removeLocalStorege = (key)=>{

    if(localStorageAvailable){

        localStorage.removeItem(key);
        return true;
    }else{

        return false;
    }

} 