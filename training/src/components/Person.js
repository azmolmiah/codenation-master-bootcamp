import { useState } from "react";

const Person = ({ name, age, handleClick }) => {
  const [due, setDue] = useState(false);
  return (
    <div>
      <h2 style={!due ? { color: "black" } : { color: "red" }}>
        My name is {name}, my age is {age} and
      </h2>
      <button onClick={handleClick}>Remove</button>
      <button onClick={() => setDue(true)}>Payment Due</button>
    </div>
  );
};

export default Person;
