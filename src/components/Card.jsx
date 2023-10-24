import {useState} from 'react'
import '../App.css'

const Card = ({active, handleClick}) => {

    if (active)
    {
        console.log("Active!")
    }

    let activityClass;

    if (active)
        activityClass = "active"
    else
        activityClass = "nonActive"

    return <div className={`card ${activityClass}`} onClick = {handleClick}><p>Card</p></div>
}

export default Card;