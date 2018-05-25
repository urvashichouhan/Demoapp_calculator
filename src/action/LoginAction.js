import {AUTH_DATA} from './types.js';
import axios from 'axios';
const API_URL='http://localhost:3030';
export async function login(data){
	return{
 			type:AUTH_DATA,
 			payload: await axios.post('http://localhost:3030/hello1',{username:data.username,
 			  password:data.password})

    } 
}