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
                <div class="form-group col-md-6">
            <fieldset>
                <label>Titulo</label>
                <input type = "titulo" class="form-control" name="titulo" onChange ={this.onTextchange}value={this.state.titulo}></input>
            </fieldset>

            <fieldset>
                <label>Descripcion</label>
                <input type = "descripcion" class="form-control" name="descripcion" onChange ={this.onTextchange}value={this.state.descripcion}></input>
            </fieldset>

            <fieldset>
                <label>Categoria</label>
                <input type = "categoria" class="form-control" name="categoria" onChange ={this.onTextchange}value={this.state.categoria}></input>
            </fieldset>

            <fieldset>
                <label>Contacto</label>
                <input type = "contacto" class="form-control" name="contacto" onChange ={this.onTextchange}value={this.state.contacto}></input>
            </fieldset>
            <br></br>
            <button class="btn btn-primary" onClick = {this.onClickButton} >Crear</button>
            </div>
            </Page>
        );

    }
    
}