import { createStore, applyMiddleware, compose, Store } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";
import createRootReducer from "./modules/reducer";

export const history = createMemoryHistory();
const middleware = [thunk, routerMiddleware(history)];
const composedMiddleware = compose(applyMiddleware(...middleware));

let composeEnhancers = compose;
if (typeof window !== "undefined") {
  // @ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default function configureStore(): Store {
  return createStore(
    createRootReducer(history),
    composeEnhancers(composedMiddleware)
  );
}
