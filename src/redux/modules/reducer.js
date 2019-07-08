import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import example from "./example";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    example
  });

export default createRootReducer;
