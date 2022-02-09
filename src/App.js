import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import gentlemenData from "./data/gentlemenData";

function App() {
  const [numberOfGentlemen, setNumberOfGentlement] = useState(0);

  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>

      <section className="controls">
        {/* <p className="info">0 gentlemen pointing at you</p> */}
        <Info numberOfGentlemen={numberOfGentlemen} />
        <button className="button button--select">Select all</button>
      </section>
    </div>
  );
}

export default App;
