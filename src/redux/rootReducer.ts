import { combineReducers } from "redux";

import nameReducer from "./saveName/reducer";
import userReducer from "./user/reducer";
import repoReducer from "./repositories/reducer";

const rootReducer = combineReducers({ nameReducer, userReducer, repoReducer });

export default rootReducer;
