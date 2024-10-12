import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {ContextApi} from "./context/contextApi.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </StrictMode>
);
