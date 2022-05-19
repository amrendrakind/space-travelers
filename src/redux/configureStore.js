import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './dragons/Dragons';

// Combine all the reducers into one place
const rootReducer = combineReducers({

  dragons: reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
