import {useState} from 'react'
import '../App.css'

const Card = ({text, active, handleClick}) => {

    const splittedText = text.split("/")
    const filename = splittedText[splittedText.length - 1]

    if (active)
    {
        console.log("Active!")
    }

    let activityClass;

    if (active)
        activityClass = "active"
    else
        activityClass = "nonActive"

    return <div className={`card ${activityClass}`} onClick = {handleClick}><p>{filename}</p></div>
}

export default Card;