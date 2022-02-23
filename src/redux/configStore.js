import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
  userReducer
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, logger))
);

export default store;
