import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import example from "./example";
import { MemoryHistory } from "history";

const createRootReducer = (history: MemoryHistory) =>
  combineReducers({
    router: connectRouter(history),
    example
  });

export default createRootReducer;
