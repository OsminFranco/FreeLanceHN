import axios from 'axios';

const publicaxios = axios.create();
publicaxios.defaults.headers.common['cahe-control']="no-cahe";
publicaxios.defaults.headers.post['cahe-control']="no-cahe";
publicaxios.defaults.headers.put['cahe-control']="no-cahe";

const privateaxios = axios.create();
privateaxios.defaults.headers.common['cahe-control']="no-cahe";
privateaxios.defaults.headers.post['cahe-control']="no-cahe";
privateaxios.defaults.headers.put['cahe-control']="no-cahe";

 export const setJWT = (jwt, logouHandler)=>{

        privateaxios.defaults.headers.common["Authorization"]= `Bearer ${jwt}`;
    }

export const naxios = publicaxios;
export const paxios = privateaxios;

