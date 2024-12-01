import ResultType from "../../types/ResultType";
import "./styles.css";

interface Props {
  history: ResultType[];
}

const ResultsTable = ({ history }: Props) => {
  const tableColumns = ["Roll", "Time", "Result"];

  return (
    <table className="results-table">
      <thead>
        <tr>
          {tableColumns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr key={item.timestamp + index}>
            <td>{index + 1}</td>
            <td>{item.timestamp}</td>
            <td>{item.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
