import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  console.log("store is runnig!");
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: 101
      };
    case "RESET":
      return {
        count: action.count
      };
  }
  return state;
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 10
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 20
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});
store.dispatch({
  type: "SET",
  count: 101
});
