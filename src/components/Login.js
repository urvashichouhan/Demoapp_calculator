import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../action/LoginAction';

class Login extends Component{	
	constructor(){
		super();
		this.state={username:'',
			password:''		
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.name]:event.target.value});
	} 

  componentDidUpdate() {
    var bool=this.props.auth;    
    if( bool)   {

      this.props.history.push("/Cal"); 
      
    }   
  }
	handleSubmit(event) { 		
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
							<input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
						</label> 
						<br/><br/>
						<input  className="btn btn-primary" type="submit" value="Submit" />
					</div>
				</form>
        <br/>
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