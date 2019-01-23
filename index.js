/** @format */
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import reducers from "./src/reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Index);
