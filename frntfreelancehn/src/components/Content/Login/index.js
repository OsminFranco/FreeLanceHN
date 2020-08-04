import React, {Component} from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom'

import { login } from './actions';


export default class extends Component{

    
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
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

            let userData = await login(this.state.email , this.state.password);
            const {jwt} = userData;
            delete userData.jwt;
            this.setState({"redirectTo":true}, ()=> {this.props.auth.login(userData, jwt);});
            alert("Usuario Correcto");
            window.location.replace("http://localhost:3001/");
        }catch(e){

            alert("Usuario o Contraseña Incorrecto")
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
            title={"Iniciar Sesion"}
            auth = {this.props.auth}

            >
                
                <div class="form-group col-md-6">

            <fieldset>
                <label>Email</label>
                <input type = "email" class="form-control" name="email" onChange ={this.onTextchange}value={this.state.email}></input>
            </fieldset>

            <fieldset>
                <label>Password</label>
                <input type = "password" class="form-control " name="password"  onChange ={this.onTextchange}value={this.state.password}></input>
            </fieldset>

            
            <br></br>
            <button class="btn btn-primary" onClick = {this.onClickButton} >Iniciar Sesion</button>

            </div>
            
            </Page>
        );

    }
    
}


/*<Page 
showHeader = {true}
showFooter = {true}    
title={"Iniciar Sesion"}

>
<h2>Iniciar Sesion</h2>
<fieldset>
    <label>Email</label>
    <input type = "email" name="email" onChange ={this.onTextchange}value={this.state.email}></input>
</fieldset>
<fieldset>
    <label>password</label>
    <input type = "password" name="password" onChange ={this.onTextchange}value={this.state.password}></input>
</fieldset>
 <button onClick = {this.onClickButton} >Iniciar Sesion</button>
</Page>*/