import React from 'react'
import './about.css'
import ME from '../../img/k.jpeg'
import {FaRunning} from 'react-icons/fa'

function About() {
  return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={ME} className="a-img"/>
                </div>
                </div>
            <div className="a-right">
                <h1 className='a-title'>Get to know me</h1>
                <p className='a-sub'>Hahahahah</p>
                <p className='a-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea mollitia molestiae beatae cupiditate aspernatur aliquam, 
                accusantium sit soluta expedita magnam earum repudiandae fugiat 
                voluptatibus. Nulla tempore voluptatum nemo sequi quidem.</p>
            </div>
        </div>


    // <section id='about'>
    //     <h5>Get To Know</h5>
    //     <h2>About Me</h2>
    //     <div className="container about__container">
    //         <div className="about__me">
    //             <div className="about__me-image">
    //                 <img src={ME} alt="About Image" className="me-image"/>
    //             </div>
    //         </div>
    //         <div className="about__content">
    //         <div className="about__cards">
    //             <article className='about__card'>
    //                 <FaRunning className="run_icon"/>
    //                 <h5>Experience</h5>
    //             </article>
    //         </div>
    //         </div>
    //     </div>
    // </section>
  )
}

export default About