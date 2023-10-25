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

  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    if (nowPlaying) {
      nowPlaying.audio.play();
    }
  }, [nowPlaying]);

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

  const isMatch = (card1, card2) => {
    return (card1.src === card2.src)
  }

  const markAsFound = (foundCards) => {
    const newCards = [...cards]
    console.log("New cards:")
    console.log(newCards)

    foundCards.forEach((foundCard) => 
    {
        const index = newCards.findIndex((newCard) => newCard.index === foundCard.index)
        newCards[index].found = true;
    })

    console.log("Päivitetyt kortit:")
    console.log(newCards)
    setCards(newCards)
  }

  // When new card is opened
  useEffect(() => {
    console.log(open);

    if (open.length === 2) {
      if (open[0].index === open[1].index) {
        return;
      }
      if (isMatch(open[0], open[1]))
      {
        console.log("Matchi löytyny!")
        markAsFound([open[0], open[1]])
    
      }
    }
  }, [open]);

  const playSong = (card) => {
    if (nowPlaying) {
      nowPlaying.audio.pause();

      if (card.index === nowPlaying.index) {
        setNowPlaying(null);
        return;
      }
    }
    setNowPlaying(card);
  };

  const clickOpen = (card) => {
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
