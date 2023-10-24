import { useState, useEffect } from "react";
import Card from "./Card";

const AudioCards = ({ songCards }) => {
  const cardData = songCards.map((song, index) => {
    return {
      audio: new Audio(`./src/assets/music/${song}`),
      src: `./src/assets/music/${song}`,
      active: false,
      found: false,
      index: index,
    };
  });

  const [cards, setCards] = useState(cardData);

  const [playingSong, setPlayingSong] = useState(null);

  useEffect(() => {
    if (playingSong) {
      playingSong.audio.play();
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
      if (open[0].index === open[1].index) {
        return;
      }
      if (open[0].src === open[1].src) {
        open.forEach((card) => (card.found = true));
        console.log("Löytyi!!");
      }
    }
  }, [open]);

  const playSong = (card) => {
    if (playingSong) {
      playingSong.audio.pause();

      if (card.index === playingSong.index) {
        setPlayingSong(null);
        return;
      }
    }
    setPlayingSong(card);
  };

  const clickOpen = (card) => {
    console.log(card);
    playSong(card);
    openCard(card);
  };

  return (
    <section className="cards">
      {cards.map((card) => (
        <Card
          key={card.index}
          text={card.src}
          active={card.active}
          found={card.found}
          handleClick={() => {
            clickOpen(card);
          }}
        />
      ))}
    </section>
  );
};

export default AudioCards;
