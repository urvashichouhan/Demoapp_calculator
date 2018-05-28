
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';
import mySaga from './Sagas'

const sagaMiddleware = createSagaMiddleware()
const initialState={};
const store = createStore(
	rootReducer,
	initialState, 
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);
export default  store;
