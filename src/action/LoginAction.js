import {AUTH_DATA} from './types.js';
import axios from 'axios';
const API_URL='http://localhost:3030';
export  function login(data){
	return{
 			type:AUTH_DATA,
 			payload: data

    } 
}
