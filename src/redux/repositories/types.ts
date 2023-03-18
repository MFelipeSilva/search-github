export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  GET_REPOSITORIES = "@repositories/GET_REPOSITORIES",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

export interface Repository {
  id?: string;
  name?: string;
  language?: string;
  stargazers_count?: number;
  watchers?: number;
  forks?: number;
}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
