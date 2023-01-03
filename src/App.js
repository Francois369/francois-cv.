// import logo from "./logo.svg";
import React, { useState } from "react";

import AuthContext from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavigation from "./components/ui/HomeNavigation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function logInHandler() {
    // localStorage.removeItem("isLoggedIn");
    if (
      document.getElementById("userName").value == "guest" &&
      document.getElementById("password").value == "good-vibes"
    ) {
      setIsLoggedIn(true);
    } else {
      alert("incorrect Username of Password");
    }
  }

  function logOutHandler() {
    // localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: logInHandler,
        onLogOut: logOutHandler,
      }}
    >
      <HomeNavigation />
    </AuthContext.Provider>
  );
}
export default App;
