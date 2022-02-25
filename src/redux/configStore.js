import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/userReducer';
import houseReducer from './reducers/houseReducer';

const reducer = combineReducers({
  userReducer,
  houseReducer
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, logger))
);

export default store;
