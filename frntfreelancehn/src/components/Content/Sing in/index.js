import React, {Component} from 'react';
import Page from '../../Page';
export default class extends Component{

    
    constructor(){
        super();
        this.state = {
            email:'',
            password:''

        }
        
        this.onClickButton = this.onClickButton.bind(this);
        this.onTextchange = this.onTextchange.bind(this);
    }

    onTextchange(e){
        const {name ,value } = e.target;
        this.setState({[name]:value})

    }
    onClickButton(e)
    {
        alert(JSON.stringify(this.state));
    }
    render(){
        return(

            <Page 
                showHeader = {true}
                showFooter = {true}    
                title={"Crear cuente"}

    >
                <fieldset>
                    <label>Email</label>
                    <input type = "email" name="email" onChange ={this.onTextchange}value={this.state.email}></input>
                </fieldset>
                <fieldset>
                    <label>password</label>
                    <input type = "password" name="password" onChange ={this.onTextchange}value={this.state.password}></input>
                </fieldset>
                 <button onClick = {this.onClickButton} >Sign in</button>
            </Page>
        );

    }
    
}