import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} style={{width: '100%'}}/>

        <div className="f-content">
            <span>balkrishansharma188@gmail.com</span>
            <div className="f-icon">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>
            <span className='copyright'>@copyright_reserved_by_Bal_krishan</span>
        </div>
    </div>
  )
}

export default Footer