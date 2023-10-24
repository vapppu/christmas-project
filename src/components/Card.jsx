import {useState} from 'react'
import '../App.css'

const Card = ({active, handleClick}) => {

    return <div className="card" onClick = {handleClick}><p>Card</p></div>
}

export default Card;