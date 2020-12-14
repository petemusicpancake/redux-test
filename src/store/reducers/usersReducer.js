import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  SELECTED_USERS,
  DELETE_USER,
} from "../types";

const initialState = {
  users: [],
  selected: [],
  fetchLoading: false,
  error: null,
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload],
      };

    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECTED_USERS:
      return {
        ...state,
        selected: [...state.selected, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        selected: [...state.selected].filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};
