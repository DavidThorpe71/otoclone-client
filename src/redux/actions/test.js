export const CHANGE_TEST_OUTCOME = 'CHANGE_TEST_OUTCOME';
export const CHEESE_IS_NICE = 'CHEESE_IS_NICE';

export function changeTestOutcome() {
  return {
    type: 'CHANGE_TEST_OUTCOME',
  };
}

export function cheeseIsNice() {
  return {
    type: 'CHEESE_IS_NICE',
  }
}