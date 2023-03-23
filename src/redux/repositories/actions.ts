import { RepositoriesTypes, Repository } from "./types";

export const loadRequest = () => ({
  type: RepositoriesTypes.LOAD_REQUEST,
});
export const getRepositories = (payload: Repository[] | undefined) => ({
  type: RepositoriesTypes.GET_REPOSITORIES,
  payload,
});
export const loadFailure = () => ({
  type: RepositoriesTypes.LOAD_FAILURE,
});
