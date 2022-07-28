import React from 'react'
import './Floating.css'

export const Floating = (props) => {
  return (
    < div className="floatingimg">
      <img src={props.image} />
      <span>
        {props.txt1}
        <br />
        {props.txt2}
      </span>
    </div>
  )
}
