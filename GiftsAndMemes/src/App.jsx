import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./pages/Home/Home";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
