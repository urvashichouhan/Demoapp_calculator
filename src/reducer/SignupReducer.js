import {DATA_SAVE_SUCCEEDED,DATA_SAVE_FAILED } from '../action/types';
const initialState={
	data1:{}
}
export default function(state= initialState,action){
	switch(action.type){
		case DATA_SAVE_SUCCEEDED:
		console.log(action.payload)
		return{
			...state,
			data:action.payload
		}
		case DATA_SAVE_FAILED:
		return{
			data:action.payload
		}
		default:
			return state;
	}
}