import {SAVE_DATA,OPEN_CAL} from './types.js';
export function signup(data){	
	return 	{
		type:SAVE_DATA,
		payload:data
    }   
}
export function login1(data){	
	console.log("++++++++++++++++++++++",data)
	return 	{
		type:OPEN_CAL,
		payload:data
    }   
}