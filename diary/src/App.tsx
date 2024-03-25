//import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Callendar from "./callendar/Callendar";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/callendar" element={<Callendar />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
