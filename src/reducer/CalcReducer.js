import {EVALUATE_EXPRESSION,INPUT_SCREEN,CLEAR_RESULT} from '../action/types';
const defaultState = {
  data: "",  
};

function compute(data){
  var num1 = data.var1;
  var num2 = data.var2;
  var op=data.op[0];
  
  switch(op){
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    case '%':
      return num1 % num2     
  }
}

export default function (state=0,action){
  switch (action.type){
    case "EVALUATE_EXPRESSION":
      return {
      	...state,
      	data:compute(action.payload)
      }
  	case "CLEAR_RESULT":
      return {
      	...state,
      	data:' '
      }     
  	default:
			return state;
	}
}