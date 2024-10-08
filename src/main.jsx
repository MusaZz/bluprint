import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//React Router
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";

//Store
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
