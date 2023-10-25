import { useState, useEffect } from "react";
import Card from "./Card";

const MusicCards = ({ songCards, increaseScore, finishGame, increaseClicks }) => {
  
  const cardData = songCards.map((song, index) => {
    return {
      src: `/music/${song}`,
      active: false,
      found: false,
      index: index,
    };
  });

  const [cards, setCards] = useState(cardData);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [open, setOpen] = useState([]);

  // When song is set to play, play it
  useEffect(() => {
    if (nowPlaying) {
      nowPlaying.audio.play();
    }
  }, [nowPlaying]);

  // When new card is opened
  useEffect(() => {
    console.log(open);

    if (open.length === 2) {
      if (open[0].index === open[1].index) {
        return;
      }
      if (isMatch(open[0], open[1])) {
        markAsFound([open[0], open[1]]);
        increaseScore();
      }
    }
  }, [open]);

  useEffect(() => {
    if (allCardsAreFound()) {
      finishGame()

      setTimeout(() => {
      }, 500)
      
    }
  }, [cards])

  const clickOpen = (card) => {
    playSong(card);
    openCard(card);
  };

  const allCardsAreFound = () => {
    return !cards.some((card) => card.found === false)
  }

  const playSong = (card) => {
    if (nowPlaying) {
      nowPlaying.audio.pause();

      if (card.index === nowPlaying.index) {
        setNowPlaying(null);
        return;
      }
    }
    setNowPlaying({...card, audio: new Audio(card.src)});
  };

  const openCard = (card) => {
    if (open.includes(card)) {
      return;
    }
    increaseClicks();

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
    return card1.src === card2.src;
  };

  const markAsFound = (foundCards) => {
    const newCards = [...cards];
    foundCards.forEach((foundCard) => {
      const index = newCards.findIndex(
        (newCard) => newCard.index === foundCard.index
      );
      newCards[index].found = true;
    });
    setCards(newCards);
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

export default MusicCards;
