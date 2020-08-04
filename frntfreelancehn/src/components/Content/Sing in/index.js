import React, {Component} from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom'

import {signin} from './actions';

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

            let userData = await signin(this.state.email , this.state.password);
            alert("Usuario Creado");
            window.location.replace("http://localhost:3001/");
        }catch(e){

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
            title={"Crear Usuario"}
            auth = {this.props.auth}

            >
                <div class="form-group col-md-6">

                
            <fieldset>
                <label>Email</label>
                <input type = "email" class="form-control" name="email" onChange ={this.onTextchange}value={this.state.email}></input>
            </fieldset>


            <fieldset>
                <label>Password</label>
                <input type = "password" class="form-control" name="password" onChange ={this.onTextchange}value={this.state.password}></input>
            </fieldset>

            <br></br>
            <button class="btn btn-primary" onClick = {this.onClickButton} >Crear Usuario</button>
            </div>
            </Page>
        );

    }
    
}