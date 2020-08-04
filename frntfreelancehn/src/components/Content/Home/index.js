import React, {Component} from 'react';
import Page from '../../Page';
import {getEmpleo , getPrivateEmpleo} from './actions';
export default class extends Component{



    
    constructor(){
        super();
        this.state = {
            click  : 0
        }
        
        this.onClickButton = this.onClickButton.bind(this);
        

    }


    onClickButton(e)
    {
       // this.setState({click:(this.state.click + 1)});
        localStorage.clear();
        window.location.replace("http://localhost:3001/");
    }

    async componentDidMount(){
        try{
        let apiReturns = await getEmpleo();
        console.log(apiReturns.data);
        let pApiReturns= await getPrivateEmpleo();
        console.log(pApiReturns.data);
        }
        catch (e) {

            console.log(e);
        }
    }

    render(){
        return(

            <Page 
                showHeader = {true}
                showFooter = {true}    
                title="FreeLanceHN..."
                auth = {this.props.auth}

    >
                <h2></h2>
                <div>
                <p>FreelanceHn es el lugar indicado para poder conseguir trabajo de forma totalmente remota , nos especializamos en programacion , diseño grafico, edicion de videos,
                    marketing digital, animacion 3D y muchas más.
                </p>
                
                <p>
                                                             Pasos para utilizar FreelanceHn
                </p>
                <p>
                     Freelancer 
                </p>
                <p>
                    1) Crear una cuenta 
                </p>
                <p>
                    2) Iniciar sesión 
                </p>
                <p>
                    3) Buscar un empleo  
                </p>
                <p>
                    3) Ponerse en contacto con el empleador  
                </p>
                


                </div>
                
                
                 <button onClick = {this.onClickButton} >Cerrar sesion</button>
            </Page>
        );

    }
    
}
