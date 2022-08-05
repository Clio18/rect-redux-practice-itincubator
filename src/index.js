import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/state";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
};

rerender(store.getState());

store.subscribe(rerender);
