import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import "./index.scss";
import App from "./App";
import "macro-css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

   <HashRouter>
      <Routes>  
        <Route  path='*'  element={<App />}/>
      </Routes>
    </HashRouter>

);
