import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./hooks/useLogin";
import { CartProvider } from "./hooks/useCart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  </StrictMode>
);
