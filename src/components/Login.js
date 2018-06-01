import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Signup.js'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Cal from './Cal.js'
import {signup } from '../action/SignupAction';
import {Link} from 'react-router-dom';
import {login} from '../action/LoginAction';
import{LoginReducer} from '../reducer/LoginReducer';
import {fire} from '../Sagas';
class Login extends Component{
	
	constructor(){
		super();
		this.state={username:'',
			password:'',
			count:0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.authdata = this.authdata.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.name]:event.target.value});
	}
 componentWillMount() { 
 	
   }
   async authdata(){   
   console.log(this.props.auth)	 			
		if(await this.props.auth)	 {
			this.props.history.push("/Cal"); 
		}    
		
   }
	handleSubmit(event) { 	
		const {count}=this.state;	
		event.preventDefault();
		if(this.state.username==='')
			alert('username is required');	
		if(this.state.password==='')
			alert('password is required');	
		var name=this.state.username;
		console.log(name)
		sessionStorage.setItem("uname",name);
			var data={
			username:this.state.username,
			password:this.state.password,			
		}

		this.props.login(data);
			this.authdata();
	}

	render(){		
		return(
			<div className="container">			
				<h1>LOGIN</h1><br/><br/>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label >
							UserName:
						  <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
						</label> <br/><br/>
						<label >
							Password:
							<input className="form-control" type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
						</label> 
						<br/><br/>
						<input  className="btn btn-primary" type="submit" value="Submit" />
					</div>
				</form>
				<Link to="/Signup">Not Registered?</Link>
			</div>
		);
	}
}
function mapStateToProps(state){
	return{
		auth:state.login.data
	};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  	login:login   
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);