import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import gentlemenData from "./data/gentlemenData";

function App() {
  const [numberOfGentlemen, setNumberOfGentlement] = useState(gentlemenData);

  const selectedPerson = numberOfGentlemen.filter(
    (person) => person.selected
  ).length;

  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>

      <section className="controls">
        <Info selectedPerson={selectedPerson} />
        <button className="button button--select">Select all</button>
      </section>
    </div>
  );
}

export default App;
