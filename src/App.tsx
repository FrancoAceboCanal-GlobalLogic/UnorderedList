import "./App.css";
import UnorderedList from "./components/List";

function App() {
  const list = Array(5).fill("");
  return (
    <div className="App">
      <header className="App-header">
        <UnorderedList list={list} />
      </header>
    </div>
  );
}

export default App;
