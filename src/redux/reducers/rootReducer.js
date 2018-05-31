import { combineReducers } from 'redux';
import testReducer from './testReducer';
import users from './users';


const rootReducer = combineReducers({
  testReducer,
  users
});

export default rootReducer;