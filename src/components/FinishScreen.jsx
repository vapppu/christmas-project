import '../App.css'

const FinishScreen = ({time, clicks}) => {

    const newGame = () => {
        window.location.reload()
    }
    // const finishTime = time;
    return <div className="finishScreen">
    <p>Finished!!!</p>
    <p>Your time: {time}</p>
    <p>Clicks used: {clicks}</p>
    <p>HAPPY HOLIDAYS!!</p>
    <button onClick={newGame}>Play again</button>
    </div>
}

export default FinishScreen;