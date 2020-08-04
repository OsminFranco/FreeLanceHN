import React, { Component } from 'react';
import Page from '../../Page';

import './empleos.css';

 
import {obtenerEmpleos} from './actions';
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle } from 'react-icons/io';
export default class extends Component{

    constructor(){

        super();
        this.state = {
            empleos: [],
            loading: true,
        }
    }

    async componentDidMount()
    {

        try{

            let empleos = await obtenerEmpleos();
            this.setState({...this.state, empleos: empleos});
        }catch(e){

            return false;
        }
        
    }

    async onClick(e)
    {
        alert("Enviar un correo electronico al Email");
    }

    render(){
        const empleosListItem = this.state.empleos.map((o)=>{

            return (<div key={o._id} className="listItem"> 
                <b>
                   <p>{o.titulo}</p>  
                   <p>{o.descripcion}</p>  
                   <p>{o.contacto}</p>  
                   
        </b><button onClick={this.onClick}><IoIosInformationCircle ></IoIosInformationCircle></button>
            </div>)
        });

        return(

            
        <Page

            showHeader = {true}
            showFooter = {true}    
            title={"Empleos"}
            auth = {this.props.auth}
    
        >
            <section className="Listholder">
                {empleosListItem}
            </section>
         </Page>

        );

    }
    

}