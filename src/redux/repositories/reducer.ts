import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes } from "./types";

const initialState: RepositoriesState = {
  dataRepository: [],
  error: false,
  loading: false,
};

const repoReducer: Reducer<RepositoriesState> = ( state = initialState, action ) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.STORE_REPOSITORIES:
      return {
        ...state,
        loading: false,
        error: false,
        dataRepository: action.payload,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, dataRepository: []};
    default:
      return state;
  }
};

export default repoReducer;
