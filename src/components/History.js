import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class History extends Component{
	state = {
    Calculations:[]
  }

  componentDidMount() {
    axios.get('http://localhost:3030/hello3')
      .then(res => {
        const Calculations = res.data;
        this.setState({ Calculations });
        console.log(Calculations)
      })
  }
	render(){		
		return(		
			<div className="container">
				<h1>History</h1>	
				<div className="box">	
					{ this.state.Calculations.map(Calculations => <li>{Calculations.inputCalculation}={Calculations.summary}</li>)}  					
				</div>			
				<Link to="/Cal">Open Calculator</Link>		     
  		</div> 
		);
	}
}
