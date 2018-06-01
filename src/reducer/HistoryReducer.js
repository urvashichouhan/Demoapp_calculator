import { SAVE_HISTORY,GET_HISTORY,HISTORY_FETCH_SUCCEEDED,HISTORY_FETCH_FAILED} from '../action/types';

const initialState={
	data1:[]
}

export default function(state= initialState,action){
	switch(action.type){
		case SAVE_HISTORY:		
		return{
			...state,
			data:action.payload
		}
		case HISTORY_FETCH_SUCCEEDED:	
		return{
			...state,
			data:action.calculation.data
		}		
		default:
			return state;
	}
}