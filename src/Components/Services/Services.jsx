import React from 'react'
import './Services.css'
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Cards from '../Cards/Cards';
import Card2 from '../Cards/Card2';
import Card3 from '../Cards/Card3';
import resume from './resume.pdf';
import {motion} from 'framer-motion/dist/framer-motion';

const Services = () => {
const transition = {duration: '1' , type: 'spring'}

    return (
        <div className="Services" id='Services'>

            <div className="l-services">
                <span></span>
                <span>My Awesome</span>
                <span>SERVICES</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore delectus exercitationem voluptates deserunt vero tenetur ullam alias dolorem, fuga explicabo repudiandae consequuntur, quidem dolore.</span>
                
                <a href={resume} download>
                <button className="btn s-btn">Download CV</button>
                </a>
                
                <div className="blur3">
                    
                </div>
            </div>

            <motion.div 
            initial={{left:'2rem'}}
            whileInView={{left:'0rem'}}
            transition={transition}
            className="r-services">
                <div 
                
                >
                    <Cards
                        emoji={heartemoji}
                        heading={'Design'}
                        detail={'abc,abhd,hfjj, sghdjh,ghdh'} />
                </div>
                <div>
                    <Card2
                        emoji={glasses}
                        heading={'Developer'}
                        detail={'abc,abhd,hfjj, sghdjh,ghdh'} />
                </div>
                <div>
                    <Card3
                        emoji={humble}
                        heading={'skills'}
                        detail={'abc,abhd,hfjj, sghdjh,ghdh'} />
                </div>
                <div className="blur4">
                    
                </div>
            </motion.div>
        </div>
    )
}

export default Services