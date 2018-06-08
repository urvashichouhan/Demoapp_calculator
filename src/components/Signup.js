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
			phone:''		
	  };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}		
	handleChange(event){
		this.setState({[event.target.name]:event.target.value});
	}
	async handleSubmit(event) { 
    event.preventDefault();
    var data={
			username:this.state.username,
			password:this.state.password,
			email:this.state.email,
			phone:this.state.phone
 		}
 		this.props.signup(data); 	
 		this.setState({
 			username:"",
 			password:"",
 			email:"",
 			hone:""
 		});
	}
	render(){ 
	var msg;
    if(this.props.bool===true)
  		msg="Your account has been created!!!!";
  	if(this.props.bool===false)
  		msg="Email ID should be unique!";    	
		return(
			<div className="container">
		    <h1>SignUp</h1><br/><br/>
		    <div>
		    	{
		    		this.props.bool
		    		?<div className="true">{msg}</div>
		    		:<div className="false">{msg}</div>
		    	}
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
  				<Link to="/Login">Already have an account?</Link>
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