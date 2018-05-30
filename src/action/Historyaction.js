import {SAVE_HISTORY,GET_HISTORY} from './types.js';
import axios from 'axios';
const API_URL='http://localhost:3030';
export function history(data){	
	return 	{
		type:SAVE_HISTORY,
		payload: axios.post('http://localhost:3030/savehistory',{data})
  } 
}
export function gethistory(){	
	return 	{
		type:GET_HISTORY,
  } 
}