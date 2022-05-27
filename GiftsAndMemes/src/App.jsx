import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AuthContext from "./context/AuthContext";

import Home from "./pages/Home/Home";
import UploadPage from "./pages/UploadPage/UploadPage";

import "./App.scss";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/upload"
          element={currentUser ? <UploadPage /> : <Home />}
        />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
