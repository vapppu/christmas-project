import { useState, useEffect } from "react";
import Card from "./Card";

const AudioCards = ({ songCards }) => {
  const cards = songCards.map((song) => {
    return {
      audio: new Audio(`./src/assets/music/${song}`),
      src: `./src/assets/music/${song}`,
      id: songCards.indexOf(song),
      active: false,
    };
  });

  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (playing) {
      playing.play();
    }
  }, [playing]);

  const [open, setOpen] = useState([]);

  const openCard = (card) => {
    if (open.length < 2) {
      setOpen([...open].concat(card));
    } else if (open.length >= 2) {
      setOpen([card]);
    }
  };

  useEffect(() => {
    if (open.length > 0) {
      open.map((card) => {
        card.active = true;
      });
    }
    console.log(open);

    if (open.length === 2) {
      if (open[0].id === open[1].id) {
        return;
      }
      if (open[0].src === open[1].src) {
        console.log("Löytyi!");
      }
    }
  }, [open]);


  useEffect(() => {
    if (open.length !== 0) {
      open.map((opened) => {
        console.log(opened);
      });
    }
  }, [open]);

  const playSong = (audio) => {
    if (playing) {
      playing.pause();

      if (audio.src === playing.src) {
        setPlaying(null);
        return;
      }
    }
    setPlaying(audio);
  };

  const clickOpen = (card) => {
    console.log(card);
    playSong(card.audio);

    openCard(card);
  };

  return (
    <section className="cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          active={card.active}
          handleClick={() => {
            clickOpen(card);
          }}
        />
      ))}
    </section>
  );
};

export default AudioCards;
