import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export interface ReducerState {
  example: string;
}

interface Action {
  type: actionTypes;
  value: any;
}

const initialState: ReducerState = {
  example: "example"
};

enum actionTypes {
  SET_EXAMPLE = "SET_EXAMPLE"
}

// REDUCERS
export const reducer = (
  state: ReducerState = initialState,
  action: Action
): ReducerState => {
  switch (action.type) {
    case actionTypes.SET_EXAMPLE:
      return {
        ...state,
        example: action.value
      };
    default:
      return state;
  }
};

export const setExample = (example: string): Action => {
  return { type: actionTypes.SET_EXAMPLE, value: example };
};

export function initializeStore(
  state: ReducerState = initialState
): Store<ReducerState, Action> {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware()));
}
