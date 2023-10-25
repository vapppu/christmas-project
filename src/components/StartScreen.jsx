import '../App.css'
import { useState } from 'react'
import Game from './Game'

const StartScreen = ({songs}) => {

    const [level, setLevel] = useState(null)
    const [songsInPlay, setSongsInPlay] = useState(null)

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
    

    const selectLevel = (selectedLevel) => {
        setLevel(selectedLevel)
        const selectedSongs = shuffle(songs).slice(0, selectedLevel)
        const songPairsShuffled = shuffle(selectedSongs.concat(selectedSongs))
        setSongsInPlay(songPairsShuffled)
    }  

    if (level !== null) {
        return <Game songs={songsInPlay} level={level} />
    }

    return (<section className="select">
        <p>Select level:</p>
        <ul>
            <li><button onClick={() => selectLevel(4)}>Easy</button></li>
            <li><button onClick={() => selectLevel(8)}>Medium</button></li>
            <li><button onClick={() => selectLevel(12)}>Hard</button></li>
        </ul>
    </section>)
}

export default StartScreen 