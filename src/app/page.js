"use client";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import PageNotFound from "./pages/404";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}
