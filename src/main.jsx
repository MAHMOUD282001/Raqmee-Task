import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { FilterationProvider } from "./context/FilterationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <FilterationProvider>
        <App />
      </FilterationProvider>
    </ModalProvider>
  </StrictMode>
);
