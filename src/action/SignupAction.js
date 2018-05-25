import {SAVE_DATA} from './types.js';
import axios from 'axios';
const API_URL='http://localhost:3030';
export function signup(data){

	return 	{
 			type:SAVE_DATA,
 			payload: axios.post('http://localhost:3030/hello',{data})
    } 
}