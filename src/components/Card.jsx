import {useState} from 'react'
import '../App.css'

const Card = ({playSong}) => {


    return <div className="card" onClick = {playSong}><p>Card</p></div>
}

export default Card;