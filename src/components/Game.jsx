import { useState, useEffect } from "react";
import "../App.css";
import MusicCards from "./MusicCards";
import Score from "./Score";
import Timer from "./Timer";
import Clicks from "./Clicks";
import FinishScreen from "./FinishScreen"

const Game = ({songs, level}) => {



  const [score, setScore] = useState(0);
  const [gameIsFinished, setGameIsFinished] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0)
  const [finishTime, setFinishTime] = useState(null)
  const [songsToPlay, setSongsToPlay] = useState(songs)



  const songsInPlay = () => {
    console.log("Creating songs to play with")
    console.log(`Level is ${level}`)
    const shuffeledSongs = shuffle(songs)
    console.log(shuffeledSongs)
    const selectedSongs = shuffeledSongs.slice(0, level)
    return selectedSongs
  }

  useEffect(() => {
    const newSongs = songsInPlay()
    setSongsToPlay(newSongs)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setSeconds(seconds + 1), 1000);
    return () => clearInterval(timer)
  }, [seconds])

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
    return <FinishScreen time={hoursMinutesSeconds(finishTime)} clicks={clicks}/>
  }

  return (
    <>
      <h1>XMAS MUSIC GAME</h1>
        <Timer time={hoursMinutesSeconds(seconds)}/>
      <Score score={score} />
      <Clicks clicks = {clicks} /> 
      <MusicCards songCards={songsToPlay} increaseScore={increaseScore} finishGame={finishGame} increaseClicks = {increaseClicks}/>
    </>
  );
}

export default Game;
