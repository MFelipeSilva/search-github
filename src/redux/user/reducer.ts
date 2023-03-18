import { Reducer } from "redux";
import { UserState, userTypes } from "./types";


const initialState: UserState = {
  data: [],
  error: false,
  loading: false,
};

const userReducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case userTypes.GET_USERDATA:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case userTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
}

export default userReducer;