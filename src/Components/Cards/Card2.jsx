import React from 'react'
import './Card2.css';

const Card2 = (props) => {
  return (
    <div className="card2">
    <img src={props.emoji} alt="" />
    <span>{props.heading}</span>
    <span>{props.detail}</span>
    <button className="c-btn">view more</button>
</div>
  )
}

export default Card2