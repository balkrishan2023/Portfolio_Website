import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIN from '../../img/linkedin.png';
import Mail from '../../img/mail.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumpup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { Floating } from '../Floating/Floating.js';
import {motion} from 'framer-motion/dist/framer-motion';
import { Link } from 'react-scroll';

export const Intro = () => {

    const transition = {duration : 2, type: 'spring'}
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi !  I Am</span>
                    <span>Bal Krishan Sharma</span>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nobis deleniti, sunt rem optio dolores ullam ab quis soluta quod.</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                <button className="btn i-btn">Hire me</button>
                </Link>
                <div className="i-icon">
                    <a href='https://www.linkedin.com/in/bal-krishan-sharma-4075831b0/' target=" "> <img src={LinkedIN} alt="LinkedIN" /></a>
                    <a href="mailto:balkrishansharma188@gmail.com" target=" "><img src={Mail} alt="e-mail" /></a>
                    <a href='https://github.com/balkrishan2023' target=" "><img src={Github} alt="Github" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                
                src={glassesimoji} alt="" srcset="" />
                <motion.div
                initial={{top: '-3%', left: '78%' }}
                whileInView={{ left: '58%' }}
                transition={transition}
                
                style={{ top: '-3%', left: '58%' }}>
                    <Floating image={crown} txt1='WEB' txt2='DEVELOPER' />
                </motion.div>
                <motion.div 
                initial={{left:'9rem', top:'17rem', bottom:'0rem'  }}
                whileInView={{ top: '17rem', bottom: '0rem' , left:'0rem' }}
                transition={transition}
                
                style={{ top: '18rem', bottom: '0rem' }}>
                    <Floating image={thumpup} txt1='BEST' txt2='CODER' />
                </motion.div>
                <div className="blur">
                </div>
                <div className="blur1" ></div>
            </div>
        </div>
    )
}
