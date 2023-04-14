import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { clearLocalStorageNewVersionApp } from "./managerLocalStorage";

// create store using preloaded state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

clearLocalStorageNewVersionApp(store);
export const dispatch = store.dispatch;
export function getState() {
	return store.getState();
}
export default store;
