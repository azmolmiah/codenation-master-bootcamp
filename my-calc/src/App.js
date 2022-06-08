import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

import Operators from "./components/Operators";
import Numbers from "./components/Numbers";

const App = () => {
  const [input, setInput] = useState("");

  const calculate = (button) => {
    if (button === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (button === "c") {
      setInput("");
    } else {
      setInput(input + button);
    }
  };

  const handleClick = (e) => {
    const display = e.target.textContent;
    calculate(display);
  };

  return (
    <div className="App">
      <h1>My Calculator</h1>
      <h2>{input}</h2>
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </div>
  );
};

export default App;
