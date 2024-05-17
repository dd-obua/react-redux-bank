import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import store from "./store";
import { deposit } from "./features/accounts/accountSlice";

store.dispatch({ type: "account/deposit", payload: 250 });
console.log(store.getState());

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
