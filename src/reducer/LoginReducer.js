import { AUTH_DATA} from '../action/types';

const initialState={
	data:false
}

export default function(state= initialState,action){
	switch(action.type){
		case AUTH_DATA:
		debugger 
			return{
			...state,
			data:action.payload		
		}
		default:
			return state;
	}
}