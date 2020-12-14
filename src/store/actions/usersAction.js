import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  SELECTED_USERS,
  DELETE_USER,
} from "../types";

export const fetchUsers = (url) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_USERS,
      });

      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_USERS_FAILED,
        payload: e,
      });
    }
  };
};

export const selectUsers = (user) => {
  return async (dispatch, getState) => {
    const {
      usersReducer: { selected },
    } = getState();

    const hasCurrentUser = selected.filter(({ id }) => id === user.id);

    if (hasCurrentUser.length === 0) {
      dispatch({
        type: SELECTED_USERS,
        payload: user,
      });
    }
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
