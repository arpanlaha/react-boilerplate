export interface ExampleReducerInterface {
  example: string;
}

export const example: ExampleReducerInterface = {
  example: "example"
};

export interface ExampleActionInterface {
  type: string; // TODO: update
}

export default function reducer(
  state = example,
  action: ExampleActionInterface
): ExampleReducerInterface {
  switch (action.type) {
    default:
      return state;
  }
}
