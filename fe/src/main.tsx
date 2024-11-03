import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouteConfig from "./routes/RouteConfig.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteConfig />
  </StrictMode>
);
