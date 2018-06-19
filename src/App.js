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
class App extends Component {
	state={
		bool:false
	}
	componentDidMount(){
		sessionStorage.removeItem("bool");
	}
	componentWillMount(){
		var bool1=  sessionStorage.getItem("bool");
		if(bool1){
			this.setState({bool:true});
		}
		else{
			this.setState({bool:false});
		}
	}
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route path="/" component={Demo} />
						<Route path="/Signup" component={Signup} />
						<Route exact path="/"  component={Home}/>
						<Route path ='/Login' component ={Login}/>
						<Route path ='/Cal'  render={()=>(this.state.bool?(<Cal/>):(<Redirect to="/Login"/>))} />
						<Route path ='/History'  render={()=>(this.state.bool?(<History/>):(<Redirect to="/Login"/>))} />
					</div>
				</Router>
			</div>
		);
	}
}
export default App;
