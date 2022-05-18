import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
// import dragons from './dragons/dragon';

// Combine all the reducers into one place
const rootReducer = combineReducers({
  // rockets,
  missions: missionsReducer,
  //   dragons,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
