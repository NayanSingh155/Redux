import { legacy_createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
