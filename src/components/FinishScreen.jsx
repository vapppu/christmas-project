import '../App.css'

const FinishScreen = ({time}) => {

    const finishTime = time;
    return <div className="finishScreen">
    <p>Finished!!!</p>
    <p>Your time: {finishTime}</p></div>
}

export default FinishScreen;