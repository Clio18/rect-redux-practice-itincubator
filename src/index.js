import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import "./index.css";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

rerender(store.getState());

store.subscribe(rerender);
