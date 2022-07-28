import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import  { Link, ScrollLink } from 'react-scroll'

export const Navbar = () => {
  return (
    <div className="n-box">
    <div className="n-left">
        <div className="n-name">Balkrishan</div>
        <Toggle/>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true}>
                <li>Services</li>
                </Link>
                <Link spy={true} to='Experiance' smooth={true}>
                <li>Experiance</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true}>
                <li>Portfolio</li>
                </Link>
                
            </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
        <button className="btn n-btn">
            contact
        </button>
        </Link>
    </div>
</div>
  )
}

