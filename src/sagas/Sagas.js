import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
/*For signup page*/
/*To save user data in the database*/
function signupdata(action){ 
  return  axios.post('http://localhost:3030/saveuserdata', {data:action.payload}).then(res=>{
        return res;
  }).catch(function (error) {
    return error;
  }); 
}
function* signUpdata(action) {
  const user = yield call(signupdata, action);
  try {     
    yield put({type: "DATA_SAVE_SUCCEEDED",user:user});     
  }
  catch (e) {   
    yield put({type: "DATA_SAVE_FAILED", message: e.message});
  }
} 
/*For login page*/
/*To send username and password to the database for authentication and getting response*/
function* fetchUser(action) {
  const user = yield call(fire, action); 
  try {     
    yield put({type: "USER_FETCH_SUCCEEDED",user:user});     
  }
  catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
} 
function fire(action){
  return axios.post('http://localhost:3030/authenticatedata', action.payload).then(res=>{
    return res;
  }).catch(function (error) {
    return error;
  });
}

/*For retrieving history*/
function getdata(action) {
  return axios.post('http://localhost:3030/retrievehistory', {username: action.payload}).then(res=>{
    return res;
  }).catch(function (error) {
    return error;
  });
}
function* fetchHistory(action) {
  const calculation = yield call(getdata, action);
  console.log(calculation)
  try {     
    yield put({type: "HISTORY_FETCH_SUCCEEDED",calculation:calculation});     
  } 
  catch (e) {      
    yield put({type: "HISTORY_FETCH_FAILED", message: e.message});
  }
}
function* mySaga() {
  yield takeEvery("SAVE_DATA", signUpdata);
  yield takeEvery("AUTH_DATA", fetchUser);
  yield takeEvery("GET_HISTORY", fetchHistory);
}
export default mySaga;