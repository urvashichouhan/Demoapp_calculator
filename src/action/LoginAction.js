import {AUTH_DATA} from './types.js';
export  function login(data){
	return{
 		type:AUTH_DATA,
 		payload: data
  } 
}
