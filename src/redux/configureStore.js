import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";
import createRootReducer from "./modules/reducer";

export const history = createMemoryHistory();
const middleware = [thunk, routerMiddleware(history)];
const composedMiddleware = compose(applyMiddleware(...middleware));
const devtools =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

export default function configureStore() {
  return createStore(
    createRootReducer(history),
    composeEnhancers(composedMiddleware)
  );
}
