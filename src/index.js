import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/redux-store";
import "./index.css";
import { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerender = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

rerender(store.getState());

store.subscribe(() => {
  rerender(store.getState());
});
