import { USER_LOGGED_IN } from "../types";

export const userReducer = (state=null, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {...state, user: action.user};
    default:
      return state;
  }
};
