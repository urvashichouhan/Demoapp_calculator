import {SAVE_DATA} from './types.js';
export function signup(data){
	return 	{
		type:SAVE_DATA,
		payload:data
  } 
}