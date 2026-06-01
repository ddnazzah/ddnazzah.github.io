import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ArchivePage from "./ArchivePage.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ArchivePage />
  </StrictMode>,
);
