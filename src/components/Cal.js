
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import History from './History.js'
import './Cal.css';
import axios from 'axios';
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
    numbers = inputCalculation.split(/[%*+/-]+/).map(Number),
    result = numbers.reduce((number1, number2, index) => {
      switch (operations[index - 1]) {
        case '+':
          return number1 + number2;
        case '-':
          return number1 - number2;
        case '%':
          return number1 % number2;
        case '*':
          return number1 * number2;
        case '/':
          return number1 / number2;
        default:
          return 0;
      }
    });
    this.setState({ summary: result.toString(),input:inputCalculation });
      var data1={
      inputCalculation:this.state.summary,
      summary:result,
      username:this.props.username
    }
    axios.post('http://localhost:3030/hello2', { data1 })
   .then(res => {
      console.log(res.data1);
    })   
  }

  handleClick = event => {
    const operators = ['+', '-', '%', '*', '/'];
    switch (event.target.innerText) {
      case '=':
        this.calculateResult(this.state.summary.slice());
        break;
      case 'C':
        this.setState({ summary: '' });
        break;
      case '+':
      case '%':
      case '/':
      case '*':
      case '-':
      case '.':
        if (
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

export default Cal;
