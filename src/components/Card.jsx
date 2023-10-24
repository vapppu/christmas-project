import {useState} from 'react'
import '../App.css'

const Card = ({active, handleClick}) => {

    console.log(active)

    return <div className="card" onClick = {handleClick}><p>Card</p></div>
}

export default Card;