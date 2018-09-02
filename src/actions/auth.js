import { USER_LOGGED_IN } from "../types";
import api from "../api";

//action
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});
//actionCreator witch returns thunk
export const login = credentials => {
  return dispatch =>
    api.user.login(credentials) //API reqs functions, in separate file
    .then(user => dispatch(userLoggedIn(user)));//dispatch user got from api call
};
