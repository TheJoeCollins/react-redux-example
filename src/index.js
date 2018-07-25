import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { friendsReducer } from "./reducers/friends/friendReducer";

// This is the reducer where state will come from
const reducers = friendsReducer;

// Here you can apply additional middleware, I added logger
// Logger helps with reading and observing state changes
const middleware = applyMiddleware(logger);

// Store is passed reducers and middleware
const store = createStore(reducers, middleware);

//Your app must be wrapped in a provider and given the store for redux to work its magic
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
