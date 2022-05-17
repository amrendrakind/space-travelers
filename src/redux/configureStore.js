import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rockets from './dragons/dragon'

//Combine all the reducers into one place
const reducer = combineReducers({
	rockets,
	missions,
	dragons,
  });
