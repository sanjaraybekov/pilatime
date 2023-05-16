import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import './index.css';
import "./fonts/Pretendard-1.3.6/public/variable/PretendardVariable.ttf";
import store from "./store";
import { ToastProvider } from "use-toast-mui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>
);




