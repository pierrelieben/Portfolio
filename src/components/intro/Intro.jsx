import React from 'react'
import './intro.css'
import Me from "../../img/Sovtech.jpeg"
import Scroll from "../../img/54414-200.svg"
import CV from "../../img/cv.pdf"
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {GrMedium} from 'react-icons/gr'



const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <div className="a-mob-wrapper">
                <div className="mob-image">
                    <img src={Me} alt="Me" className='i-mob-img' />
                    </div>
                <div className="into-block">
                <h2 className='i-intro'>Hello, my name is</h2>
                <h1 className='i-name'>Pierre Liebenberg</h1>
                </div>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>Industrial Engineer</div>
                            <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>Writer</div>
                            <div className='i-title-item'>Industrial Engineer</div>
                        </div>
                    </div>
                    
                </div>
                        <p className='i-desc'>
                        I am an Industrial Engineer with a passion for
                        software development. I'm a great commuicator which allows me
                        to make a difference in group
                        environments. I am hardworking
                        and strive to make a positve
                        change wherever I find myself.
                        </p>
                    <div className="bot-buts">
                        <div className='i-cv'>
                        <a className="i-button" href={CV} download>
                        Download CV</a>
                        </div>
                        <div className='i-links'>
                       <a href="https://github.com/pierrelieben"> <BsGithub size={40} className="link_icon"/></a>
                       <a href="https://www.linkedin.com/in/pierre-liebenberg-0638a11b5/"> <BsLinkedin size={40} className="link_icon"/></a>
                       <a href="https://medium.com/codex/my-first-two-months-as-a-developer-in-a-start-up-environment-reflections-of-an-industrial-ea61aa45fe58"> <GrMedium size={40} className="link_icon"/></a>
                        </div>
                        <img src={Scroll} alt="Scroll" className='i-scroll' />
                    </div>
                </div>
                
                
        </div>
        
        <div className='i-right'>
            <div className='i-bg'> </div>
            <img src={Me} alt="Me" className='i-img' />
        </div> 
       
    </div>
  )
}

export default Intro

