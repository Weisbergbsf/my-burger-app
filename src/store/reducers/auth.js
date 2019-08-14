import * as actiosTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirect: "/"
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirect: action.path });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiosTypes.AUTH_START:
      return authStart(state, action);
    case actiosTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actiosTypes.AUTH_FAIL:
      return authFail(state, action);
    case actiosTypes.AUTH_LOGOUT:
      return authLogout();
    case actiosTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
