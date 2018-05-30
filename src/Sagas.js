import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AUTH_DATA,USER_FETCH_SUCCEEDED,USER_FETCH_FAILED, SAVE_HISTORY,GET_HISTORY,  } from './action/types';
import axios from 'axios';

function fire(action) {
  return axios.post('http://localhost:3030/authenticatedata', action.payload).then(res=>{
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
function getdata(action) {
  return axios.get('http://localhost:3030/retrievehistory', action.payload).then(res=>{
    return res;
  }).catch(function (error) {
    return error;
  });
}

function* fetchHistory(action) {
  const calculation = yield call(getdata, action);
   try {     
      yield put({type: "HISTORY_FETCH_SUCCEEDED",calculation:calculation});
     
    } catch (e) {
       console.log("in catch", calculation.data)
      yield put({type: "HISTORY_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
  yield takeEvery("AUTH_DATA", fetchUser);
  yield takeEvery("GET_HISTORY", fetchHistory);
} 
export default mySaga;