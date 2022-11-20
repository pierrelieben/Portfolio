import React from 'react'
import './about.css'
import ME from '../../img/k.jpeg'
import {FaRunning} from 'react-icons/fa'
import {MdOutlineEmojiPeople} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import {FaGlobeAfrica} from 'react-icons/fa'
import Scroll from "../../img/54414-200.svg"

import ImageSwapper from './about.js'

import {FaAws} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {FaDocker} from 'react-icons/fa'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaGitSquare} from 'react-icons/fa'
import {SiJira} from 'react-icons/si'


function About() {
  return (
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
                {ImageSwapper()}
                
                </div>
            <div className="a-right">
                
                <div className="a-right-wrapper">
                <div className="about-titles">
                    <h1 className='a-title'>Get to know me</h1> 
                    
                </div>
                    <div className="me-cards">
                        <div className="me-card1">
                            <MdOutlineEmojiPeople size={55} className="card-icon"/>
                            <p className='a-desc'> I am an easy-going guy with an open-minded curiosity 
                            about the world around me and the people in it. I am an eager learner with a natural inclination to question the status-quo, and strive to make a positive change where I believe I can add a unique perspective.
                             </p>
                        </div>
                        <div className="me-card1">
                            <FaGlobeAfrica size={40}  className="card-icon"/>
                            <p className='a-desc'> I am originally from Namibia, which cultivated my love for nature. I spend a lot of my free time in the mountains and enjoy an active lifestyle. When it's raining, however, you can find me snuggled up with a strong cup of coffee and a 1950s Hitchcock thriller. 
                             </p>
                        </div>
                        <div className="me-card1">
                            <FaLaptopCode size={40} className="card-icon"/>
                            <p className='a-desc'>I am currently employed as a Junior Tooling Specialist. I write and
                                                deploy tooling applications and scripts to automise and improve
                                                our wearable data processing workflows. This mainly includes
                                                working with Python (Flask, Streamlit, Pandas), basic frontend
                                                languages (HTML, CSS & JavaScript), Git (Sourcetree), Bitbucket
                                                (Jira), Docker, Terraform and AWS (DynamoDB, ECR, S3). 
                             </p>
                        </div>
                        <div className="me-card-icons">
                            
                            <FaPython size={30} className="icon-exp" />
                            <FaAws size={30} className="icon-exp" />
                            <FaDocker size={30} className="icon-exp" />
                            <FaGitSquare size={30} className="icon-exp" />
                            <IoLogoJavascript size={30} className="icon-exp" />
                            <SiJira size={27} className="icon-exp" />
                            <FaCss3Alt size={30} className="icon-exp" />
                            <FaHtml5 size={30} className="icon-exp" />
                            
            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>


  )
}

export default About