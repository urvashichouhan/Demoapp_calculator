import { USER_FETCH_SUCCEEDED} from '../action/types';
const initialState={
	data:false
}
export default function(state = initialState,action){		
	switch(action.type){	
		case USER_FETCH_SUCCEEDED:
			return{
				...state,
				data:action.user.data
			}
		default:		
			return state;
	}
}