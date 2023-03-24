import { userTypes, UserDB } from "./types";

export const loadRequest = () => ({
  type: userTypes.LOAD_REQUEST,
});
export const storeUserData = (payload: UserDB | undefined) => ({
  type: userTypes.STORE_USERDATA,
  payload,
});
export const loadFailure = () => ({
  type: userTypes.LOAD_FAILURE,
});
