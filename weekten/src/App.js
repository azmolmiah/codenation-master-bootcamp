import { useState, useEffect } from "react";
import "./App.css";
import Box from "./box";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Box name={user} />
      <Box name="Someone" age={35} />
      <Box name="Someelse" />
      <Box name="Somethingelse" />
      <input onChange={(e) => setUser(e.target.value)} />
      {user && <Box name="Tony" age={34} />}
      {user ? <Box name="Jeff" /> : <Box name="Not Jeff" />}
    </div>
  );
};

export default App;
