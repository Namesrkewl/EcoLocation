import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navs from "./components/Navs/nav";

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/annoucements" element={<Announcements />}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
