import "./App.css";

import Person from "./components/Person";
import Jobs from "./components/Jobs";
import Movies from "./components/Movies/Movies";
import News from "./components/News/News";
import Homes from "./components/Homes/Homes";

const App = () => {
  return (
    <div className="App">
      <h1>Codenation Week 5</h1>
      <Person name="Dave" age="33" petsName="Tom" petType="Cat" />
      <Person name="Stacey" age="24" petsName="Scoobydoo" petType="Dog" />
      <Person name="Karen" age="48" petsName="Mutley" petType="Dog" />
      <Jobs job="Junior Developer" />
      <Movies />
      <News />
      <Homes />
    </div>
  );
};

export default App;
