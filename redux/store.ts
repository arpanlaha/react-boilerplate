import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Action, initialState, reducer, ReducerState } from "./reducer";

/**
 * Initializes the redux store.
 * @param state the initial state.
 * @returns the initial store.
 */
export const initializeStore = (
  state: ReducerState = initialState
): Store<ReducerState, Action> => {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware()));
};
