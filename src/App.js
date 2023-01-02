// import logo from "./logo.svg";
import useState from "react";

import AuthContext from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavigation from "./components/ui/HomeNavigation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logInHandler() {
    setIsLoggedIn(true);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onlogIn: logInHandler }}
    >
      <HomeNavigation />
    </AuthContext.Provider>
  );
}
export default App;
