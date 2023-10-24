import { useState, useEffect } from "react";
import Card from "./Card";

const AudioCards = ({ songCards }) => {
  const cardData = songCards.map((song, index) => {
    return {
      audio: new Audio(`./src/assets/music/${song}`),
      src: `./src/assets/music/${song}`,
      active: false,
      index: index,
    };
  });

  const [cards, setCards] = useState(cardData);

  const [playingSong, setPlayingSong] = useState(null);

  useEffect(() => {
    if (playingSong) {
      playingSong.play();
    }
  }, [playingSong]);

  const [open, setOpen] = useState([]);

  const openCard = (card) => {
    if (open.length < 2) {
      card.active = true;
      setOpen([...open].concat(card));
    } else if (open.length >= 2) {
      open.forEach((card) => (card.active = false));
      setOpen([card]);
      card.active = true;
    }
  };

  useEffect(() => {

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

  const playSong = (audio) => {
    if (playingSong) {
      playingSong.pause();

      if (audio.src === playingSong.src) {
        setPlayingSong(null);
        return;
      }
    }
    setPlayingSong(audio);
  };

  const clickOpen = (card) => {
    console.log(card);
    playSong(card.audio);
    openCard(card);
  };

  return (
    <section className="cards">
      {cards.map((card) => (
        <Card
          key={card.index}
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
