import { GET_ALL_USERS } from '../actions/users';

const initialState = {
  users: []
}

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.data
      };
    default:
      return state;
  }
}
