import { combineReducers } from "redux";
import repoReducer from "./repositories/reducer";

import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer, repoReducer });

export default rootReducer;
