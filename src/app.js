import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "water bill",
    note: "this is note for water",
    amount: 100,
    createdAt: 1250
  })
);

store.dispatch(
  addExpense({
    description: "gas bill",
    note: "this is note for gas",
    amount: 1066,
    createdAt: 100
  })
);
store.dispatch(
  addExpense({
    description: "rent",
    note: "this is note for rent",
    amount: 1066,
    createdAt: 3000
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
