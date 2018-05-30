import {combineReducers} from 'redux';
import SignupReducer from './SignupReducer';
import LoginReducer from './LoginReducer';
import CalcReducer from './CalcReducer';
import HistoryReducer from './HistoryReducer';
export default combineReducers({
	signup: SignupReducer,
	login:LoginReducer,
	evaluate:CalcReducer,
	history:HistoryReducer
});