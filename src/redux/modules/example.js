export const example = {
  example: "example"
};

export default function reducer(state = example, action) {
  switch (action.type) {
    default:
      return state;
  }
}
