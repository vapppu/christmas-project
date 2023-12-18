import { useState, useEffect } from "react";
import "../App.css";
import MusicCards from "./MusicCards";
import Result from "./Result";
import FinishScreen from "./FinishScreen"

const Game = ({ songs, level }) => {

  const [score, setScore] = useState(0);
  const [gameIsFinished, setGameIsFinished] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0)
  const [finishTime, setFinishTime] = useState(null)
  const [songsToPlay, setSongsToPlay] = useState(songs)

  useEffect(() => {
    const newSongs = songsInPlay()
    setSongsToPlay(newSongs)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setSeconds(seconds + 1), 1000);
    return () => clearInterval(timer)
  }, [seconds])

  const songsInPlay = () => {
    const shuffeledSongs = shuffle(songs)
    const selectedSongs = shuffeledSongs.slice(0, level)
    return selectedSongs
  }

  const increaseScore = () => setScore(score + 1);

  const increaseClicks = () => setClicks(clicks + 1);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const finishGame = () => {
    setGameIsFinished(true)
    setFinishTime(seconds)

  }

  const hoursMinutesSeconds = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds);
    if (seconds >= 3600) {
      return date.toISOString().slice(11, 19);
    }
    else {
      return date.toISOString().slice(14, 19);
    }
  }

  if (gameIsFinished) {
    return <FinishScreen time={hoursMinutesSeconds(finishTime)} clicks={clicks} />
  }

  return (
    <div className="game">
      <h1>XMAS MUSIC GAME</h1>
      <p className="bold">Find pairs!</p>
      <Result text="score" value={score} />
      <Result text="time" value={hoursMinutesSeconds(seconds)} />
      <Result text="clicks" value={clicks} />
      <MusicCards songCards={songsToPlay} increaseScore={increaseScore} finishGame={finishGame} increaseClicks={increaseClicks} />
    </div>
  );
}

export default Game;
