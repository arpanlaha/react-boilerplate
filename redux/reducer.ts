/**
 * @file Defining the the Redux state and actions.
 */

/**
 * The state managed by the reducer.
 * @property example - a string.
 */
export interface ReducerState {
  example: string;
}

/**
 * The action operating on our reducer.
 * @property type - the type of the action.
 * @property value - the value carried by the action.
 */
export interface Action {
  type: ActionTypes;
  value: any;
}

/**
 * The possible action types.
 * @member SET_EXAMPLE
 */
enum ActionTypes {
  SET_EXAMPLE = "SET_EXAMPLE"
}

/**
 * The initial state fed into the reducer.
 */
export const initialState: ReducerState = {
  example: "example"
};

/**
 * The reducer function.
 * @param state the previous state.
 * @param action the incoming action.
 * @returns the new state.
 */
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

/**
 * An example action.
 * @param example the example value.
 * @return the action containing the example value.
 */
export const setExample = (example: string): Action => {
  return { type: ActionTypes.SET_EXAMPLE, value: example };
};
