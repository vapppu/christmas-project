import StartScreen from './components/StartScreen'
import "./App.css";


const App = () => {

  const songs = [
    "angels-we-have.mp3",
    "carol-of-the-bells.mp3",
    "coventry-carol.mp3",
    "deck-the-hall.mp3",
    "ding-dong.mp3",
    "first-nowell.mp3",
    "gaudete.mp3",
    "hark-the-herald.mp3",
    "il-est-ne.mp3",
    "in-the-bleak.mp3",
    "jingle-bells.mp3",
    "joy-to-the-world.mp3",
    "let-it-snow.mp3",
    "o-christmas-tree.mp3",
    "o-come-o-come.mp3",
    "o-holy-night.mp3",
    "rudolph.mp3",
    "silent-night.mp3",
    "we-wish-you.mp3",
  ];

  return (
    <>
      <StartScreen songs = {songs} />
    </>
  );
}

export default App;
