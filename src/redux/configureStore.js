import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rockets from './rockets/rockets';

// Combine all the reducers into one place
const rootReducer = combineReducers({
  rockets,
  // missions,
//   dragons,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
