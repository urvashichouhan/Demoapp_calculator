import React,{Component} from 'react';
import{Link} from "react-router-dom"; 
export default class Demo extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
				<div className="container">
					<div className="navbar-header">
						<ul className="navbar-nav">								
							<li className="nav-item navbar-brand"><Link to={"/"}>Home</Link></li>
							<li className="nav-item navbar-brand"><Link to={"/Signup"}>Sign-up</Link></li>
							<li className="nav-item navbar-brand"><Link to={"/Login"}>Login</Link></li>
						</ul>
					</div>
				</div>
			</nav>	
		);
	}
};