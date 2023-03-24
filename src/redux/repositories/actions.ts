import { RepositoriesTypes, Repository } from "./types";

export const loadRequest = () => ({
  type: RepositoriesTypes.LOAD_REQUEST,
});
export const storeRepositories = (payload: Repository[] | undefined) => ({
  type: RepositoriesTypes.STORE_REPOSITORIES,
  payload,
});
export const loadFailure = () => ({
  type: RepositoriesTypes.LOAD_FAILURE,
});
