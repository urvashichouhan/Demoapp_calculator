import { AUTH_DATA,USER_FETCH_SUCCEEDED,USER_FETCH_FAILED} from '../action/types';
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