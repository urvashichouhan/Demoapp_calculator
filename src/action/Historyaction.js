import {SAVE_HISTORY,GET_HISTORY} from './types.js';
import axios from 'axios';
export function history(data){
	return 	{
		type:SAVE_HISTORY,
		payload: axios.post('http://localhost:3030/savehistory',{data})
  }
}
export function gethistory(username){
	return 	{
		type:GET_HISTORY,
		payload: username
  }
}