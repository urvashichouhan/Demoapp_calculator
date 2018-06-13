import React,{Component} from 'react';
import cal from '../cal.jpg';
import './home.css';
export default class Home extends Component{
	render(){
		return(		
			<div className="image">
				<img className="img-fluid"  src={cal} width="100%" height="100%" alt={"CALCULATOR"} /> 					
				<h2>
					<span>SIMPLE <span className='spacer'></span><br /><span className='spacer'></span>CALCULATOR</span> 
				</h2>		     				
  		</div> 
		);
	}
}
