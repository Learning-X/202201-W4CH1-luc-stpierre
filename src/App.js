import "./App.css";
import Info from "./components/Info";
function App() {
  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>

      <section className="controls">
        {/* <p className="info">0 gentlemen pointing at you</p> */}
        <Info />
        <button className="button button--select">Select all</button>
      </section>
    </div>
  );
}

export default App;
