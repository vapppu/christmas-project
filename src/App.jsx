import StartScreen from './components/StartScreen'
import "./App.css";

import song1 from "./assets/angels-we-have.mp3"
import song2 from "./assets/carol-of-the-bells.mp3"
import song3 from "./assets/coventry-carol.mp3"
import song4 from "./assets/deck-the-hall.mp3"
import song5 from "./assets/ding-dong.mp3"
import song6 from "./assets/first-nowell.mp3"
import song7 from "./assets/gaudete.mp3"
import song8 from "./assets/hark-the-herald.mp3"
import song9 from "./assets/il-est-ne.mp3"
import song10 from "./assets/in-the-bleak.mp3"
import song11 from "./assets/jingle-bells.mp3"
import song12 from "./assets/joy-to-the-world.mp3"
import song13 from "./assets/let-it-snow.mp3"
import song14 from "./assets/o-christmas-tree.mp3"
import song15 from "./assets/o-come-o-come.mp3"
import song16 from "./assets/o-holy-night.mp3"
import song17 from "./assets/rudolph.mp3"
import song18 from "./assets/silent-night.mp3"
import song19 from "./assets/we-wish-you.mp3"


const App = () => {

  const songs = [
    song1, song2, song3, song4,song5,song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19
    // "angels-we-have.mp3",
    // "carol-of-the-bells.mp3",
    // "coventry-carol.mp3",
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

  return (
    <>
      <StartScreen songs = {songs} />
    </>
  );
}

export default App;
