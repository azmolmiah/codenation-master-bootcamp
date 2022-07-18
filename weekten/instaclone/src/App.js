import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [user, setUser] = useState({});
  const lclStg = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username === undefined && lclStg.username === undefined) {
      navigate("/");
    } else {
      navigate(`/${user.username || lclStg.username}`);
    }
  }, [navigate, user]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setter={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path={`/${lclStg.username}` || `/${user.username}`}
          element={
            <Profile username={`${lclStg.username}` || `${user.username}`} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
