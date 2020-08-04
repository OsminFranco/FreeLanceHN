import  {paxios} from '../../../utilities/axios';

export const obtenerEmpleos = async()=>{

        try{
            let { data } = await paxios.get('/api/empleo/all');
            console.log(data);
            return data;
        }catch(e){

            throw(e);
        }
}


export const NuevosEmpleos = async (titulo,descripcion,categoria,contacto)=>{
    try
    {
        const {data} = await paxios.post(
            "/api/empleo/new",
            {
                titulo:titulo,
                descripcion:descripcion,
                categoria:categoria,
                contacto:contacto
            }
        );
           return data;
    }catch(e){

        throw(e);
    }
}