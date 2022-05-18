import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducerRockets from './rockets/rockets';

// Combine all the reducers into one place
const rootReducer = combineReducers({
  Rockets: reducerRockets,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
