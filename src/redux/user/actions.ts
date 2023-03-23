import { userTypes, UserDB } from "./types";

export const loadRequest = () => ({
  type: userTypes.LOAD_REQUEST,
});
export const getUserData = (payload: UserDB | undefined) => ({
  type: userTypes.GET_USERDATA,
  payload,
});
export const loadFailure = () => ({
  type: userTypes.LOAD_FAILURE,
});
