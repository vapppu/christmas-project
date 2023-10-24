import { useState, useEffect } from "react";
import Card from "./Card";

const AudioCards = ({songCards}) => {
    console.log("Rendering")
//   const songs = [
//     "angels-we-have.mp3",
//     "carol-of-the-bells.mp3",
//     "coventry-carol.mp3",
//     "deck-the-hall.mp3",
//     "ding-dong.mp3",
//     "first-nowell.mp3",
//     "gaudete.mp3",
//     "hark-the-herald.mp3",
//     "il-est-ne.mp3",
//     "in-the-bleak.mp3",
//     "jingle-bells.mp3",
//     "joy-to-the-world.mp3",
//     "let-it-snow.mp3",
//     "o-christmas-tree.mp3",
//     "o-come-o-come.mp3",
//     "o-holy-night.mp3",
//     "rudolph.mp3",
//     "silent-night.mp3",
//     "we-wish-you.mp3",
//   ];

//   const shuffle = (array) => { 
//     for (let i = array.length - 1; i > 0; i--) { 
//       const j = Math.floor(Math.random() * (i + 1)); 
//       [array[i], array[j]] = [array[j], array[i]]; 
//     } 
//     return array; 
//   };

//   const songCards = shuffle(songs.concat(songs))

  const audioFiles = songCards.map(
    (song) => new Audio(`./src/assets/music/${song}`)
  );

  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (playing) {
      playing.play();
    }
  }, [playing]);

  const [open, setOpen] = useState([]);

  const openCard = (card, file) => {
    if (open.length === 0) {
        setOpen(open.concat({card: card, file: file}))
        console.log(`yksi kortti avattu`)
    }
    else if (open.length === 1) {
        console.log("Kaksi korttia avattu!")
        if (open[0].file.src === file.src)
        {
            console.log("Found!!!!")
        }
        else {
            console.log("Not found...")
        }
        setOpen([])
    }
  }

  useEffect(() => {
    if (open.length !== 0) 
    {
        open.map((opened) => {console.log(opened)})
    }
  }, [open])

  const playSong = (file) => {
    if (playing) {
      playing.pause();

      if (file.src === playing.src) {
        setPlaying(null)
        return
        }
    }
      setPlaying(file);
    
  };

  return (
    <section className="cards">
      {audioFiles.map((file) => (
        <Card playSong={() => {
            playSong(file)
            openCard(file)
            }} />
      ))}
    </section>
  );
};

export default AudioCards;
