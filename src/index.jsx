import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./assets/styles/global.css"

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
