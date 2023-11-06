import "../App.css";
import Result from "./Result";

const FinishScreen = ({ time, clicks }) => {
  const newGame = () => {
    window.location.reload();
  };
  return (
    <div className="finishScreen">
      <h2>Finished!</h2>
      <Result text="Your time" value={time} />
      <Result text="Clicks used" value={clicks} />

      <p>HAPPY HOLIDAYS!!</p>
      <button onClick={newGame}>Play again</button>
    </div>
  );
};

export default FinishScreen;
