import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AUTH_DATA,USER_FETCH_SUCCEEDED,USER_FETCH_FAILED} from './action/types';
import axios from 'axios';

function fire(action) {
  return axios.post('http://localhost:3030/hello1', action.payload).then(res=>{
    return res;
  }).catch(function (error) {
    return error;
  });
}

function* fetchUser(action) {
	const user = yield call(fire, action);
   try {     
      yield put({type: "USER_FETCH_SUCCEEDED",user:user});
     
    } catch (e) {
    	 console.log("in catch", user.data)
      yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
  yield takeEvery("AUTH_DATA", fetchUser);
} 
export default mySaga;