import { useEffect, useState } from "react";
import Dice from "./components/Dice";
import ResultsTable from "./components/ResultsTable";
import ResultType from "./types/ResultType";
import "./App.css";

function App() {
  const [history, setHistory] = useState<ResultType[]>([]);

  const averageAcc =
    history.length > 0 &&
    history.reduce(
      (a, b) => {
        if (typeof b.result === "string") {
          const result = b.result.split(",");
          const sum = result.reduce((a, b) => Number(a) + Number(b), 0);
          return { sum: a.sum + sum, count: a.count + result.length };
        }

        return { sum: a.sum + b.result, count: a.count + 1 };
      },
      { count: 0, sum: 0 }
    );
    
  const average = averageAcc
    ? (averageAcc.sum / averageAcc.count).toFixed(0)
    : 0;

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
      <p>Average: {average || 0}</p>
      <button onClick={clearHistory}>Clear History</button>
      <ResultsTable history={history} />
    </div>
  );
}

export default App;
