const initialState = { count: 2 };
const counterReducer = (state = initialState, action) => {
  console.log("state = ", state.count);
  console.log("action = ", action.incrementBy);
  switch (action.type) {
    case "INCREMENT_ASYNC":
      return {
        ...state,
        count: state.count + action.incrementBy
      };
    case "DECREMENT_ASYNC":
      return {
        ...state,
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counterReducer;
