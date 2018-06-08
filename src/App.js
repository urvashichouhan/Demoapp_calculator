import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from'./components/Signup';
import Home from './components/Home.js'
import Demo from './components/Demo.js'
import Login from './components/Login.js'
import Cal from './components/Cal.js'
import History from './components/History.js'

class App extends Component {

requireAuth(nextState, replace) {
  console.log(sessionStorage.getItem('bool'))
  if (sessionStorage.getItem('bool')===false) {
    replace({
      pathname: '/login'
    })
  }
}  
  render() {  
    var password=sessionStorage.getItem('password');    
    console.log(password)  
    return (
      <div className="App">        
        <Router>
          <div>
            <Route path="/" component={Demo} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/"  component={Home}/>
            <Route path ='/Login' component ={Login}/>            
            <Route path ='/Cal' component ={Cal} onEnter={this.requireAuth.bind(this)}/> 
              <Route path ='/History' component ={History} /> 
          </div>    
        </Router>
      </div>
    );
  }
}

export default App;
