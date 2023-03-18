import { createStore, Store, applyMiddleware } from "redux";
import { RepositoriesState } from "./repositories/types";

import logger from "redux-logger"

import rootReducer from "./rootReducer";
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store: Store = createStore(rootReducer, applyMiddleware(logger));

export default store;
