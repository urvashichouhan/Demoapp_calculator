import { SAVE_HISTORY,HISTORY_FETCH_SUCCEEDED} from '../action/types';
const initialState={
  data:[]
}
export default function(state= initialState,action){
  switch(action.type){
    case SAVE_HISTORY:
      return state;
    case HISTORY_FETCH_SUCCEEDED:
      return{
      ...state,
      data:action.calculation.data
    }
    default:
      return state;
  }
}