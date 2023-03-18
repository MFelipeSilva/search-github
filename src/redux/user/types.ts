export const userTypes = {
  LOAD_REQUEST: "user/LOAD_REQUEST",
  GET_USERDATA: "user/GET_USERDATA",
  LOAD_FAILURE: "user/LOAD_FAILURE",
}

export interface UserDB {
  avatar_url: string,
  login: string,
  followers: string,
  following: string,
  public_repos: string,
}

export interface UserState {
  readonly data: UserDB[];
  readonly loading: boolean;
  readonly error: boolean;
}