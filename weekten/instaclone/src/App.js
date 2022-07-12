import { useState } from "react";
import "./App.css";

import Signup from "./components/Signup/Signup";

const App = () => {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Signup setter={setUser} />
    </div>
  );
};

export default App;
