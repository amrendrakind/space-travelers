import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './dragons/Dragons';
import missionsReducer from './missions/missions';
import reducerRockets from './rockets/rockets';

// Combine all the reducers into one place
const rootReducer = combineReducers({
  dragons: reducer,
  Rockets: reducerRockets,
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;

export { rootReducer };
