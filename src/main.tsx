import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/shared/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>
);
