import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom';
import Signup from'./components/Signup';
import Home from './components/Home.js'
import Demo from './components/Demo.js'
import Login from './components/Login.js';
import Cal from './components/Cal.js';
import History from './components/History.js';
//import Auth from './components/auth.js';
import {connect} from 'react-redux';

class App extends Component {
  render() {  
    console.log(this.props.auth)
    return (
      <div className="App">        
        <Router>
          <div>
            <Route path="/" component={Demo} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/"  component={Home}/>
            <Route path ='/Login' component ={Login}/>            
            <Route path ='/Cal' render={()=>(this.props.auth?(<Cal/>):(<Redirect to="/Login"/>))} /> 
            <Route path ='/History' component ={History} /> 
          </div>    
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    auth:state.login.data
  };
}
export default connect(mapStateToProps) (App);
