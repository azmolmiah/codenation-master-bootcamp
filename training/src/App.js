import { useState } from "react";
import "./App.css";

import Person from "./components/Person";
import Jobs from "./components/Jobs";
import Movies from "./components/Movies/Movies";
import News from "./components/News/News";
import Homes from "./components/Homes/Homes";
import Counter from "./components/Counter";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Dave", age: 33 },
    { name: "Stacey", age: 24 },
    { name: "Karen", age: 48 },
  ]);
  let [counter, setCounter] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const addCounter = () => {
    setCounter(counter++);
  };

  const minusCounter = () => {
    setCounter(counter--);
  };

  const handleClick = (index) => {
    let storedPeople = [...persons];
    storedPeople.splice(index, 1);
    setPersons(storedPeople);
  };

  const handleSubmit = (e) => {
    setPersons([...persons, { name: nameInput, age: parseInt(ageInput) }]);
    // setNameInput("");
    // setAgeInput("");
    e.preventDefault();
  };

  console.log(persons);

  return (
    <div className="App">
      <h1>Codenation Week 5</h1>
      {persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={index}
            handleClick={() => handleClick(index)}
          />
        );
      })}

      <Form
        handleSubmit={handleSubmit}
        nameInput={nameInput}
        setNameInput={setNameInput}
        ageInput={ageInput}
        setAgeInput={setAgeInput}
      />

      <Jobs job="Junior Developer" />
      <Movies />
      <News />
      <Homes />
      <Counter
        addCounter={() => addCounter()}
        minusCounter={() => minusCounter()}
        count={counter}
      />
    </div>
  );
};

export default App;
