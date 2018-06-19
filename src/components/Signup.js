import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import './signup.css';
import {connect} from 'react-redux';
import {signup } from '../action/SignupAction';

class Signup extends Component{
	constructor(){
		super();
		this.state={
			username:'',
			password:'',
			email:'',
			phone:'',
			msg:''
	  };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.name]:event.target.value});
	}
	async handleSubmit(event) {
    event.preventDefault();
    var pwd=this.state.password;
    if(pwd.length<8)
    	this.setState({msg:"Password must contain minimum 8 digits"});

    else if(pwd.search(/[a-z][0-9]/)===-1)
    	this.setState({msg:"Password must contain alphanumeric digits"});

    else if(pwd.search(/[!-/]/)===-1)
    	this.setState({msg:"Password must contain special character"});
    else{
    	this.setState({msg:""});
	    var data={
				username:this.state.username,
				password:this.state.password,
				email:this.state.email,
				phone:this.state.phone
	 		}
	 		this.props.signup(data);
	 		sessionStorage.setItem("username",this.state.username);
	  	sessionStorage.setItem("password",this.state.password);
	 		this.setState({
	 			username:"",
	 			password:"",
	 			email:"",
	 			phone:""
	 		});
			this.props.history.push("/login");
	 	}
	}
	render(){
		var msg;
    if(this.props.bool===true)
  		msg="Your account has been created!!!!";
  	if(this.props.bool===false)
  		msg="Email ID should be unique!";
		return(
			<div className="container">
			<div className='row1'>
		    	<h1  >SignUp</h1><br/><br/>
		    </div>
		    <div>
		    	{
		    		this.props.bool
		    		?<div className="true">{msg}</div>
		    		:<div className="false">{msg}</div>
		    	}
		    </div>
		    <div className="msg">
		    {this.state.msg}
		    </div>
				<form onSubmit={this.handleSubmit} method="post">
					<div className="form-group">
						<label >
	   					UserName:
	    			  <input className="form-control" type="text" name="username" required value={this.state.username} onChange={this.handleChange} />
	  				</label> <br/><br/>
		  			<label >
					   	Password:
					    <input className="form-control" type="password" name="password" required value={this.state.password} onChange={this.handleChange} />
	  				</label>
	  				<br/><br/>
	  				<label >
					   	Email:
					    <input className="form-control" type="email" required name="email" value={this.state.email} onChange={this.handleChange} />
	  				</label>
	  				<br/><br/>
	  				<label >
					   	Phone No:
					    <input className="form-control" type="number" name="phone" value={this.state.phone} onChange={this.handleChange} />
	  				</label>
	  				<br/><br/>
	  				<input className="btn btn-primary" type="submit" value="Submit" />
  				</div>
  				<Link to="/Login" data-toggle="tooltip" data-placement="left" title="Login!">Already have an account?</Link>
				</form>
			</div>
		);
	}
}
function mapStateToProps(state){
	console.log(state)
	return{
		bool:state.signup.data
	}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signup: signup
  }, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(Signup);