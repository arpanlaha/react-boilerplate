export interface ReducerState {
  example: string;
}

export interface Action {
  type: ActionTypes;
  value: any;
}

export const initialState: ReducerState = {
  example: "example"
};

enum ActionTypes {
  SET_EXAMPLE = "SET_EXAMPLE"
}

// REDUCERS
export const reducer = (
  state: ReducerState = initialState,
  action: Action
): ReducerState => {
  switch (action.type) {
    case ActionTypes.SET_EXAMPLE:
      return {
        ...state,
        example: action.value
      };
    default:
      return state;
  }
};

export const setExample = (example: string): Action => {
  return { type: ActionTypes.SET_EXAMPLE, value: example };
};
