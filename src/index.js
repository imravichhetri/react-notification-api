import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import NotificationWrapper from "./NotificationProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NotificationWrapper>
      <App />
    </NotificationWrapper>
  </StrictMode>,
  rootElement
);
