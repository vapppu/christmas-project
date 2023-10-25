import { useState, useEffect } from "react";
import "../App.css";
import MusicCards from "./MusicCards";
import Score from "./Score";
import Timer from "./Timer";

function Game() {
  const songs = [
    "angels-we-have.mp3",
    "carol-of-the-bells.mp3",
    "coventry-carol.mp3"
    // "deck-the-hall.mp3",
    // "ding-dong.mp3",
    // "first-nowell.mp3",
    // "gaudete.mp3",
    // "hark-the-herald.mp3",
    // "il-est-ne.mp3",
    // "in-the-bleak.mp3",
    // "jingle-bells.mp3",
    // "joy-to-the-world.mp3",
    // "let-it-snow.mp3",
    // "o-christmas-tree.mp3",
    // "o-come-o-come.mp3",
    // "o-holy-night.mp3",
    // "rudolph.mp3",
    // "silent-night.mp3",
    // "we-wish-you.mp3",
  ];

  const [score, setScore] = useState(0);
  const [gameIsFinished, setGameIsFinished] = useState(false)
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => setSeconds(seconds + 1), 1000);
    return () => clearInterval(timer)
  }, [seconds])

  const increaseScore = () => setScore(score + 1);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const finishGame = () => {setGameIsFinished(true)}

  const songCards = shuffle(songs.concat([...songs]));

  if (gameIsFinished) {
    return <div>GAME IS FINISHED!!!</div>
  }

  return (
    <>
      <h1>XMAS MUSIC GAME</h1>
        <Timer seconds={seconds}/>
      <Score score={score} />
      <MusicCards songCards={songCards} increaseScore={increaseScore} finishGame={finishGame}/>
    </>
  );
}

export default Game;
