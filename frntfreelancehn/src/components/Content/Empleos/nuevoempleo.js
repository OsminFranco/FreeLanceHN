import React, {Component} from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom'

import {NuevosEmpleos} from './actions';

export default class extends Component{

    
    constructor(){
        super();
        this.state = {
            titulo:'',
            descripcion:'',
            categoria:'',
            contacto:'',
            redirectTo: false


        }
        
        this.onClickButton = this.onClickButton.bind(this);
        this.onTextchange = this.onTextchange.bind(this);
    }

    onTextchange(e){
        const {name ,value } = e.target;
        this.setState({[name]:value})

    }

    async onClickButton(e)
    {
        try{

            let userData = await NuevosEmpleos(this.state.titulo , this.state.descripcion,this.state.categoria,this.state.contacto);
            alert("Empleo Creado");
            window.location.replace("http://localhost:3001/nuevoempleo");
        }catch(e){

            alert("Error")
        }
    }

    render(){
        if(this.state.redirectTo){
            const tourl = (this.props.location.state)? this.props.location.state.from.pathname:'/';
            return(
                <Redirect to ={tourl}/>
            )
        }
        return(

            
            <Page 
            showHeader = {true}
            showFooter = {true}    
            title={"Crear Empleo"}
            auth = {this.props.auth}

            >
            <h2>Crear Empleo</h2>
            <fieldset>
                <label>Titulo</label>
                <input type = "titulo" name="titulo" onChange ={this.onTextchange}value={this.state.titulo}></input>
            </fieldset>

            <fieldset>
                <label>Descripcion</label>
                <input type = "descripcion" name="descripcion" onChange ={this.onTextchange}value={this.state.descripcion}></input>
            </fieldset>

            <fieldset>
                <label>Categoria</label>
                <input type = "categoria" name="categoria" onChange ={this.onTextchange}value={this.state.categoria}></input>
            </fieldset>

            <fieldset>
                <label>Contacto</label>
                <input type = "contacto" name="contacto" onChange ={this.onTextchange}value={this.state.contacto}></input>
            </fieldset>

            <button onClick = {this.onClickButton} >Crear</button>
            </Page>
        );

    }
    
}