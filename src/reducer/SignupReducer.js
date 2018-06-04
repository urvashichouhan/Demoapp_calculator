import { SAVE_DATA} from '../action/types';
const initialState={
	data1:{}
}
export default function(state= initialState,action){
	switch(action.type){
		case SAVE_DATA:
		return{
			...state,
			data:action.payload
		}
		default:
			return state;
	}
}