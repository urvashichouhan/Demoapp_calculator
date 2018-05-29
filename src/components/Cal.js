
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import History from './History.js'
import './Cal.css';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {evaluate,clearResult } from '../action/CalcAction.js';
class Cal extends Component {
  state = {
    summary: '',
    input:''
  };
  calculateResult(inputCalculation) {     
    const{input}=this.state;
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
    this.props.evaluate(data);  
  }

  handleClick = event => {
    const operators = ['+', '-', '%', '*', '/'];
    switch (event.target.innerText) {
      case '=':
        this.calculateResult(this.state.summary.slice());              
        break;
      case 'C': this.props.clearResult;
        break;        
      case '+':
      case '%':
      case '/':
      case '*':
      case '-':
      case '.':
        if(
          operators.includes(this.state.summary.slice(-1)) &&
          operators.includes(event.target.innerText)
        ) {
          break;
        }
      default:
        this.setState({
          summary: this.state.summary.concat(event.target.innerText)
        });     
        break;
    }
  };

  render() {  
    console.log(this.props.result)
    return (
      <div className="container">
       <Link to="/Login">Log-out?</Link>
        <div className="calculator" onClick={this.handleClick}>
          <div className="row top">{this.state.summary}</div>
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
        <Link to="/History">History</Link>
      </div>
    );
  }
}

function CalcButton(props) {
  return <button className="button">{props.value}</button>;
}

function mapStateToProps(state){
  return{
    result:state.evaluate.data,    
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    evaluate: evaluate,  
    clearResult:clearResult
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Cal);
