import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import allReducers from "./features/reducers";

const store = configureStore({
  reducer: allReducers,
});

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
 document.getElementById("root"));
