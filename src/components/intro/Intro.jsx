import React from 'react'
import './intro.css'
import Me from "../../img/Sovtech.png"
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
                <h2 className='i-intro'>Hello, my name is</h2>
                <h1 className='i-name'>Pierre Liebenberg</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Industrial Engineer</div>
                            <div className='i-title-item'>Software Developer</div>
                            <div className='i-title-item'>Critical thinker</div>
                            <div className='i-title-item'>Writer</div>
                            <div className='i-title-item'>Human being</div>
                        </div>
                    </div>
                        <p className='i-desc'>
                        I design and develop software ranging from technical back-end
                        applications, to beautiful front-end websites for clients.
                        I design and develop software ranging from technical back-end
                        applications, to beautiful front-end websites for clients.
                        </p>
                    
                </div>
                <div className='i-cv'>
                    {/* <button className="button"> */}
                        <a className="i-button" href={CV} download>
                        Download CV
                        </a>
                    {/* </button> */}
                </div>
                <div className='i-links'>
                       <a href="https://github.com/pierrelieben"> <BsGithub size={40} className="link_icon"/></a>
                       <a href="https://github.com/pierrelieben"> <BsLinkedin size={40} className="link_icon"/></a>
                       <a href="https://medium.com/codex/my-first-two-months-as-a-developer-in-a-start-up-environment-reflections-of-an-industrial-ea61aa45fe58"> <GrMedium size={40} className="link_icon"/></a>
                    </div>
                <img src={Scroll} alt="" className='i-scroll' />
        </div>
        
        <div className='i-right'>
            <div className='i-bg'> </div>
            <img src={Me} alt="" className='i-img' />
        </div> 
       
    </div>
  )
}

export default Intro