import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './rockets/rockets';

// Combine all the reducers into one place
const rootReducer = combineReducers({
  rockets,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;
