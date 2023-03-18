import { Reducer } from "redux";
import { nameTypes, nameState } from "./types";

const initalState: nameState = {
  name: "",
};

const nameReducer: Reducer<nameState> = (state = initalState, action) => {
  switch (action.type) {
    case nameTypes.ADD_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

export default nameReducer;
