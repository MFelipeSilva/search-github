import { createStore, Store } from "redux";
//import logger from "redux-logger"

import rootReducer from "./rootReducer";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store: Store = createStore(rootReducer);

export default store;
