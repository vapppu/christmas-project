import { useState, useEffect } from "react";
import Card from "./Card";

const MusicCards = ({
  songCards,
  increaseScore,
  finishGame,
  increaseClicks,
}) => {
  const cardData = songCards.map((song, index) => {
    return {
      src: song,
      active: false,
      found: false,
      index: index,
      playing: false,
    };
  });

  const [cards, setCards] = useState(cardData);
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    if (allCardsAreFound()) {
      setTimeout(() => {}, 500);
      finishGame();

      return;
    }

    const playing = cards.find((card) => card.playing);
    if (playing) {
      setNowPlaying(new Audio(playing.src));
    }
  }, [cards]);

  useEffect(() => {
    if (nowPlaying) {
      nowPlaying.play();
    }
  }, [nowPlaying]);

  const allCardsAreFound = () => {
    return !cards.some((card) => card.found === false);
  };

  const clickopened = (openedCard) => {
    if (nowPlaying) {
      nowPlaying.pause();
    }

    const newCards = [...cards];
    console.log(newCards);
    const index = newCards.findIndex((card) => card.index === openedCard.index);

    if (!openedCard.active) {
      
      // Open card, maximum two cards at a time
      if (newCards.filter((card) => card.active).length >= 2) {
        newCards.forEach((card) => (card.active = false));
        newCards[index].active = true;
      } else {
        newCards[index].active = true;
      }
      increaseClicks();

      // Check for match
      const openedCards = newCards.filter((card) => card.active);
      if (openedCards.length === 2) {
        if (openedCards[0].src === openedCards[1].src) {
          newCards.forEach((card) => {
            if (card.src === openedCard.src) {
              card.found = true;
            }
          });
          increaseScore();
        }
      }
    }

    // Toggle playing card sound, mute other cards
    newCards.forEach((card) =>
      card.index === openedCard.index
        ? (card.playing = !card.playing)
        : (card.playing = false)
    );

    setCards(newCards);
  };

  return (
    <section className="cards">
      {cards.map((card) => (
        <Card
          card={card}
          handleClick={() => {
            clickopened(card);
          }}
        />
      ))}
    </section>
  );
};

export default MusicCards;
