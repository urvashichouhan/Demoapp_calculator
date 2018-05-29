import {EVALUATE_EXPRESSION,INPUT_SCREEN,CLEAR_RESULT} from './types.js';
export function evaluate(data){
  return {
    type:"EVALUATE_EXPRESSION",
    payload: data
  }
}
export function inputdata(data){
  return {
    type:"EVALUATE_EXPRESSION",
    payload: data
  }
}
export const clearResult = () => ({
  type: CLEAR_RESULT  
});