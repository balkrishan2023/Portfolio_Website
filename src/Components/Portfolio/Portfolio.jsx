import React from 'react'
import './Portfolio.css';

import sidebar from "../../img/sidebar.png"
import ecommerce from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.png";



const Portfolio = () => {
    return (
        <div id='Portfolio' className="portfolio">
            <div className="p-text">
                <span>Recent Projects</span>
                <br />
                <span>Portfolio</span>
            </div>

            <div className="p-image">
                <img src={sidebar} alt="" srcset="" />
                <img src={ecommerce} alt="" srcset="" />
                <img src={hoc} alt="" srcset="" />
                <img src={musicapp} alt="" srcset="" />
            </div>
            <div className="p-blur">

            </div>
            <div className="p-blur-r">

            </div>
        </div>
    )
}

export default Portfolio