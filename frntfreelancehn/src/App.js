import React, {Component} from 'react';
import { Switch, BrowserRouter as Router}   from 'react-router-dom';
import {setJWT, getLocalStorage, setLocalStorage} from './utilities/axios';

import './App.css';
import PRoute from './utilities/privateroutes';
import NRoute from './utilities/normalroutes';

import Home from './components/Content/Home';
import Login from './components/Content/Login';
import SingIn  from './components/Content/Sing in';
import Votes from './components/Content/Votes';
import Empleos from './components/Content/Empleos/empleos';
import NuevoEmpleo from './components/Content/Empleos/nuevoempleo';

export default class extends Component{

  constructor (){
    super();
    //setLocalStorage('jwt','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbnlmcmFuY29fMjhAeWFob28uY29tIiwicm9sZXMiOlsicHVibGljIl0sIl9pZCI6IjVmMjc2MjQzYzMxMDE3MzU4Yzc3ZWFhYiIsImlhdCI6MTU5NjQxNjU5OSwiZXhwIjoxNTk2NDIzNzk5fQ.SlquWTwhhZOLKVTcWrnouh1N-Z28pCGZrTxlxtBhtNA');
    this.state={
      user: getLocalStorage('user') || {},
      jwt: getLocalStorage('jwt') || "",
      islogged:false,
      loadingBackend:false
    }
    if(this.state.jwt !=="")
    {

      setJWT(this.state.jwt);
      this.state.islogged = true;
    }

    this.setLogginData = this.setLogginData.bind(this);
    this.setLoggoutData = this.setLoggoutData.bind(this);
  }
  setLogginData(user , jwt){

    this.setState({

      ...this.state,
      user:user,
      jwt:jwt,
    },
     ()=>{
      setLocalStorage('jwt',jwt);
      setLocalStorage('user',user); 
      setJWT(jwt);}
    );
  }

  setLoggoutData(){

    this.setState(
      {
        ...this.state,
        user:"",
        jwt:"",
      },
      ()=>{setJWT('')}
    );
  }

  render() { //componente funcional
    const auth = {
      islogged : this.state.islogged,
      login: this.setLogginData,
      logout: this.setLoggoutData,
    }
    return (
      <Router>
        <switch>
        <NRoute path="/" component={Home} exact auth={auth}/>
        <NRoute path="/Login" component={Login} exact auth={auth} />
        <NRoute path="/signin" component={SingIn} exact auth={auth} />
        <PRoute path="/votes" component={Votes} exact auth={auth}/>
        <NRoute path="/empleos" component={Empleos} exact auth={auth}/>
        <NRoute path="/nuevoempleo" component={NuevoEmpleo} exact auth={auth}/>
        </switch>
      </Router>
    );
  }
}

//export default App;
