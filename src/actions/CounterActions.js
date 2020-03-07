export const Increment = (payload = { incrementBy: 1 }) => ({
  type: "INCREMENT_ASYNC",
  incrementBy: payload.incrementBy
});

export const Decrement = (payload = { decrementBy: 1 }) => ({
  type: "DECREMENT_ASYNC",
  decrementBy: payload.decrementBy
});

export const Reset = () => ({
  type: "RESET"
});
