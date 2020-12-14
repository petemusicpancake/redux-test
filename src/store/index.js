import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reduxDev =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistConfig = {
  key: "root",
  storage,
};
const rootreducer = combineReducers({ usersReducer });
const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), reduxDev)
);
