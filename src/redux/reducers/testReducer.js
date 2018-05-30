import { combineReducers } from 'redux';
import { CHANGE_TEST_OUTCOME, CHEESE_IS_NICE } from '../actions/test';


const test = (state = { testSuccess: false }, action) => {
  const { type } = action;
  switch (type) {
    case CHANGE_TEST_OUTCOME:
      return {
        ...state,
        testSuccess: !state.testSuccess
      };
    default:
      return state;
  }
}

const cheese = (state = { cheese: '' }, action) => {
  const { type } = action;
  switch (type) {
    case CHEESE_IS_NICE:
      return {
        ...state,
        cheese: 'is nice'
      }
    default:
      return state;
  }
}

const testReducer = combineReducers({
  test,
  cheese
});

export default testReducer;