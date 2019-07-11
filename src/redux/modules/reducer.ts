import { combineReducers, Reducer } from "redux";
import example from "./example";
import { MemoryHistory } from "history";
import { connectRouter } from "connected-react-router";
import { ExampleReducerInterface } from "./example";

export interface ReducerInterface {
  example: ExampleReducerInterface;
}

const createRootReducer = (history: MemoryHistory): Reducer =>
  combineReducers({
    router: connectRouter(history),
    example
  });

export default createRootReducer;
