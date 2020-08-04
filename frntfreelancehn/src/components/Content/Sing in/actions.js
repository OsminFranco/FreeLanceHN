import {naxios} from '../../../utilities/axios';

export const signin = async (email , password)=>{
    try
    {
        const {data} = await naxios.post(
            "/api/sec/signin",
            {
                email: email,
                password: password
            }
        );
           return data;
    }catch(e){

        throw(e);
    }
}