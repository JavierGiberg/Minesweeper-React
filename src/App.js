import "./App.css";
import NavBar from "./NavBar/NavBar";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App-container">
      <NavBar />
      <Board width={9} height={9} />
    </div>
  );
}

export default App;
