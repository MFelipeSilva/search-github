export const RepositoriesTypes = {
  LOAD_REQUEST: "repositories/LOAD_REQUEST",
  STORE_REPOSITORIES: "repositories/GET_REPOSITORIES",
  LOAD_FAILURE: "repositories/LOAD_FAILURE",
};

export interface Repository {
  id?: string;
  name?: string;
  language?: string;
  stargazers_count?: number;
  watchers?: number;
  forks?: number;
  html_url?: string;
}

export interface RepositoriesState {
  readonly dataRepository: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
