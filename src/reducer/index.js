import {combineReducers} from 'redux';
import SignupReducer from './SignupReducer';
import LoginReducer from './LoginReducer';
export default combineReducers({
	signup: SignupReducer,
	login:LoginReducer
});