import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from'./components/Signup';
import Home from './components/Home.js'
import Demo from './components/Demo.js'
import Login from './components/Login.js'
import Cal from './components/Cal.js'
import History from './components/History.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
          <div>
            <Route path="/" component={Demo} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/"  component={Home}/>
            <Route path ='/Login' component ={Login}/> 
            <Route path ='/Cal' component ={Cal}/>  
            <Route path ='/History' component ={History}/>  
          </div>    
        </Router>
      </div>
    );
  }
}

export default App;
