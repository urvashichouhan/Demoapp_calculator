import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import './login.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../action/LoginAction';

class Login extends Component{	
	constructor(){
		super();
		this.state={
			username:'',
			password:''		
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		event.preventDefault();
		this.setState({[event.target.name]:event.target.value});
	} 
	componentWillUnmount(){			
    window.location.reload();
  } 

  componentDidUpdate() {
	  var bool=this.props.auth;	  	 
	  sessionStorage.setItem("bool",bool);	 	 
	  if( bool){
	    this.props.history.push("/cal");  	  
	  }  	 
  }

	handleSubmit(event) { 		
		event.preventDefault();			
		var name=this.state.username;	
		sessionStorage.setItem("uname",name);
		var data={
			username:this.state.username,
			password:this.state.password			
		}
		this.props.login(data);    
	}
	
	render(){
		var msg; 
	  if(this.props.auth===false)
	    msg="Incorrect username or password!!";	    	
		return(
			<div className="container">			
				<h1>LOGIN</h1><br/><br/>
				<div className="login">
		    	{msg}
		   	</div>	
				<form onSubmit={this.handleSubmit} method="post">
					<div className="form-group">
						<label >
							UserName:
						  <input className="form-control" required type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
						</label> <br/><br/>
						<label >
							Password:
							<input className="form-control" required type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
						</label> 
						<br/><br/>
						<input  className="btn btn-primary" type="submit" value="Submit" />
					</div>
				</form>
        <br/>
				<Link to="/Signup" data-toggle="tooltip" data-placement="left" title="SignUp!">Not Registered?</Link>
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