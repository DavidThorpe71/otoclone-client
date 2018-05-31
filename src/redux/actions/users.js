export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';


export function getUsers() {
  return async function (dispatch) {
    const users = await fetch('/users')
      .then(res => res.json())
    return dispatch({
      type: 'GET_ALL_USERS',
      data: users
    })
  }
}
