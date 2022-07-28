import React from 'react'
import './Cards.css';

const Cards = (props) => {
  return (
<div className="cards">
    <img src={props.emoji} alt="" />
    <span>{props.heading}</span>
    <span>{props.detail}</span>
    <button className="c-btn">view more</button>
</div>
  )
}

export default Cards