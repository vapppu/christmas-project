import { useState, useEffect } from "react";
import Card from "./Card";

const AudioCards = ({songCards}) => {
    console.log("Rendering")


  const audioFiles = songCards.map(
    (song) => new Audio(`./src/assets/music/${song}`)
  );

  const cards = songCards.map((song) => {
    return {
        audio: new Audio(`./src/assets/music/${song}`),
        id: songCards.indexOf(song),
        active: false,
    }
  })

  console.log(cards)

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

      {cards.map((card) => <Card active={card.active} handleClick={() => {
        playSong(card.audio)
        openCard(card.file)
      }}/>)}

    </section>
  );
};

export default AudioCards;
