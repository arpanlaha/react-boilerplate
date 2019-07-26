import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Action, initialState, reducer, ReducerState } from "./reducer";

export function initializeStore(
  state: ReducerState = initialState
): Store<ReducerState, Action> {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware()));
}
