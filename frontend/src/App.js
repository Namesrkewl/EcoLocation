import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navs from "./components/Navs/nav";
import Announcements from "./pages/Annoncements/Announcements";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </Router>
  );
}

export default App;
