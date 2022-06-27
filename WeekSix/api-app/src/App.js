import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchUsers = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    searchUsers("Azmol Miah");
  }, []);

  return <div className="App"></div>;
}

export default App;
