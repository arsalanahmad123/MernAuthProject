import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login.jsx";
import Signup from "./screens/Signup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
