import { useEffect, useState } from "react";
import Dice from "./components/Dice";
import ResultsTable from "./components/ResultsTable";
import ResultType from "./types/ResultType";
import "./App.css";

function App() {
  const [history, setHistory] = useState<ResultType[]>([]);

  const avarage = history.length && history.reduce((a, b) => {
    if (typeof b.result === "string") {
      return a + b.result.split(",").length;
    }
    return a + b.result;
  }, 0).toFixed(0);

  useEffect(() => {
    const rollHistory = localStorage.getItem("rollHistory");
    if (rollHistory) {
      setHistory(JSON.parse(rollHistory));
    }
  }, []);

  const addToHistory = (result: ResultType) => {
    const newHistory = [...history, result];
    setHistory(newHistory);
    localStorage.setItem("rollHistory", JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("rollHistory");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Dice Rolling</p>
      </header>
      <Dice addToHistory={addToHistory} />
      <p>Average: {avarage || 0}</p>
      <button onClick={clearHistory}>Clear History</button>
      <ResultsTable history={history} />
    </div>
  );
}

export default App;
