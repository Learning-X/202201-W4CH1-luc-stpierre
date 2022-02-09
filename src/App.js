import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info";
import gentlemenData from "./data/gentlemenData";

function App() {
  const [gentlemen, setGentlemen] = useState(gentlemenData);

  const selectedGentlemen = gentlemen.filter(
    (person) => person.selected
  ).length;

  const selectAllGentlemen = () => {
    setGentlemen(
      gentlemen.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }))
    );
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>

      <section className="controls">
        <Info selectedGentlemen={selectedGentlemen} />
        <Button action={selectAllGentlemen} />
      </section>

      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => {
            return <Gentleman key={gentleman.id} gentleman={gentleman} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
