import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./index.css";
import "./components/Greeting";
import Greeting from "./components/Greeting";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Greeting />
    </StrictMode>
);
