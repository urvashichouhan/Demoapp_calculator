import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cal.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {history} from '../action/Historyaction.js';
import {inputdata} from '../action/CalcAction.js';

class Cal extends Component {
	state = {
		summary:'',
	};
	calculateResult(inputCalculation) {
		let operations = inputCalculation
			.split(/[\d]/)
			.map(val => val.replace(/\./, ''))
			.filter(Boolean),
		numbers = inputCalculation.split(/[%*+/-]+/).map(Number);
		var data={
			op:operations,
			var1:numbers[0],
			var2:numbers[1]
		}
		console.log(data);
		this.props.evaluate(data);
	}

	handleClick = event => {
		var data= (event.target.innerText)
		this.props.inputdata(data);
	};
	 handleClick1 = async(event) => {
		var username=sessionStorage.getItem('uname');
		var summary= document.getElementById("myText").innerText;
		var data1={
			username:username,
			summary:summary
		}
		await this.props.history(data1);
	};

	render() {
		return (
			<div className="container">
			 <Link to="/Login" data-toggle="tooltip" data-placement="left" title="Log-out!">Log-out?</Link>
				<div className="calculator " onClick={this.handleClick}>
					<div className="row top " id="myText">{this.props.result}</div>
					<div className="row">
						<CalcButton value="C" />
						<CalcButton value="%" />
						<CalcButton value="/" />
					</div>

					<div className="row">
						<CalcButton value="7" />
						<CalcButton value="8" />
						<CalcButton value="9" />
						<CalcButton value="*" />
					</div>

					<div className="row">
						<CalcButton value="4" />
						<CalcButton value="5" />
						<CalcButton value="6" />
						<CalcButton value="-" />
					</div>

					<div className="row">
						<CalcButton value="1" />
						<CalcButton value="2" />
						<CalcButton value="3" />
						<CalcButton value="+" />
					</div>

					<div className="row">
						<CalcButton value="0" />
						<CalcButton value="." />
						<CalcButton value="=" />
					</div>
				</div>
				<br/>
				<button  className="btn btn-primary" onClick={this.handleClick1}>Save To History</button><br/>
				<Link to="/History" data-toggle="tooltip" data-placement="left" title="History!">History</Link>
			</div>
		);
	}
}

function CalcButton(props) {
	return <button className="button">{props.value}</button>;
}

function mapStateToProps(state){
	return{
	 result:state.evaluate.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		inputdata:inputdata,
		history:history
	}, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Cal);
