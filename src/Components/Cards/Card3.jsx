import React from 'react'
import './Card3.css'

const Card3 = (props) => {
  return (
    <div className="card3">
    <img src={props.emoji} alt="" />
    <span>{props.heading}</span>
    <span>{props.detail}</span>
    <button className="c-btn">view more</button>
</div>
  )
}

export default Card3