import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from'./components/Signup';
import Home from './components/Home.js'
import Demo from './components/Demo.js'
import Login from './components/Login.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
        <Router>
          <div>
            <Route path="/" component={Demo} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/"  component={Home}/>
            <Route path ='/Login' component ={Login}/>  
          </div>    
        </Router>
      </div>
    );
  }
}

export default App;
