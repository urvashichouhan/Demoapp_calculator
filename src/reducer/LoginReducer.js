import { USER_FETCH_SUCCEEDED} from '../action/types';
export default function(state = 0,action){			 
	switch(action.type){	
		case USER_FETCH_SUCCEEDED:
		console.log("in reducer",action.user.data)
			return{
				...state,
				data:action.user.data
			}
		default:		
			return state;
	}
}