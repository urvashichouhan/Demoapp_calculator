import {DATA_SAVE_SUCCEEDED,DATA_SAVE_FAILED } from '../action/types';
export default function(state=0,action){	
	switch(action.type){
		case DATA_SAVE_SUCCEEDED:	
		return {
			...state,
			data:action.user.data
		}		
		case DATA_SAVE_FAILED:
		return{
			...state,
			data:action.message.data
		}
		default:		
			return state;
	}
} 