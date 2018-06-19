import {INPUT_SCREEN} from '../action/types';
var data=" ";
var data1=" ";
var data2='';
var var1;
var op=" ";
var var2;

//To evaluate the expression//
function compute(var1,var2,op){
	var num1 =parseFloat(var1);
	var num2 = parseFloat(var2);
	var op1=op;
	switch(op1){
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
		default:
			return 0
	}
}

function input(input){
	switch (input) {
		case '=':
			var2=data1;
			console.log(var1)
			console.log(data1)
			data2=compute(var1,var2,op);
			op=" ";
			var summary=[data,"=",data2]
			return summary;

		case 'C':
			data=" ";
			data1='';
			data2='';
			op=" ";
			var1= '';
			var2='';
			return data;
		case '+':
		case '%':
		case '/':
		case '*':
		case '-':
			if(op===" ")
			{ if(data2){
				var1=data2
			}else {
				var1=data;}
				data=data.concat(input);
				op= input;
				return data;
			}
			else{
				var2=data1;
				return "only one operation at a time"
			}

		default:
			if(data===''){
				data=input;
			return data;}
			else{
				if(data.includes("+")||data.includes("-")||data.includes("*")||data.includes("/")||data.includes("%"))
				{ data1='';
					data1=data1.concat(input)
				}
				data=data.concat(input)
				return data;
			}
	}
}

export default function (state=0,action){

	switch (action.type){
		case INPUT_SCREEN :
			return{
				...state,
				data:input(action.payload)
			}
		default:
			return state;
	}
}