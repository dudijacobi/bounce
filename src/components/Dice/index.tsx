import { useState } from "react";
import Dots from "./Dot";
import ResultType from "../../types/ResultType";
import { getRandomDice } from "../../services/get.services";
import "./styles.css";

interface Props {
  addToHistory: (history: ResultType) => void;
}

const Dice = ({ addToHistory }: Props) => {
  const [number, setNumber] = useState(1);
  const [numberOfRolls, setNumberOfRolls] = useState(1);
  const [loading, setLoading] = useState(false);

  const shuffleFromAPIAndAddToHistory = async () => {
    try {
      setLoading(true);
      const { dice, timestamp } = await getRandomDice();
      const formatedDate = timestamp.toISOString().split("T")[1].slice(0, 8);

      addToHistory({
        timestamp: formatedDate,
        result: dice.length > 1 ? dice.toString() : dice,
      });
      setNumber(dice[dice.length - 1]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const shuffleAndAddToHistory = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    const date = new Date();
    const formatedDate = date.toISOString().split("T")[1].slice(0, 8);
    const arrayOfDices = Array.from({ length: numberOfRolls }).map(
      () => Math.floor(Math.random() * 6) + 1
    );

    const result =
      numberOfRolls > 1
        ? Array.from({ length: numberOfRolls })
            .map(() => Math.floor(Math.random() * 6) + 1)
            .toString()
        : newNumber;

    addToHistory({
      timestamp: formatedDate,
      result: result,
    });

    setNumber(
      numberOfRolls > 1 ? newNumber : arrayOfDices[arrayOfDices.length - 1]
    );
  };

  return (
    <div className="dice-container">
      <div className="dice-wrapper" onClick={shuffleAndAddToHistory}>
        {loading ? "Loading..." : <Dots number={number} />}
      </div>
      <div className="number-of-rolls">
        <label>Number of Rolls: </label>
        <input
          type="number"
          value={numberOfRolls}
          onChange={(e) => setNumberOfRolls(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default Dice;
