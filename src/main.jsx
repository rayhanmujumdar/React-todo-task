import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/scss/App.scss";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/app";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
