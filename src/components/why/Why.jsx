import React from 'react'
import './why.css'
import CV from "../../img/cv.pdf"
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {GrMedium} from 'react-icons/gr'

function Why() {
  return (
    <div className="why-wrapper">
    <div className="why">
        <div className="why-block">
        <div className="why-title">
            <h1>Why SovTech?</h1>
        </div>
    <div className='why-card'>
        <div className="why-content">
            <p>
                For the last 8 months I have been working as a python toolings Specialist
                at a healthtech company. I worked in a team where my sole purpose was to make their lives
                easier, utilising my problem solving skills and coding skills. This involved identifying
                inefficiencies in our workflows and I wrote scripts and a small full stack application to create more efficient processes.
                <br />
                <br />
                This opened my eyes to the world of full stack developemt. I enjoyed the process of listening to my colleagues needs, identifying and quantifying their problems, 
                and finally buiding and deploying software to solve it. I enjoy identifying customer's needs, leveraging my creativity and technical skills to build a solution. 
                My passion lies in utilising technology to create smart and efficient solutions, and to make it look beautiful while I'm at it. This realisation led me to build a website on squarespace for my 
                very first client as a freelancer, <a href="https://www.tellusconservation.com" className='Tellus'>Tellus</a>.
                <br />
                <br />
                I believe the graduate programme at SovTech is the perfect next step for my growth as a young software engineer.
                The young innovative culture at SovTech and the interesting solutions you are building is something I want to be a part of and add value to.  

            </p>
        </div>

        </div>   
        <div className="two-buttons">
                
                <a className="why-button" href={CV} download>
                Download CV</a>
                <a className='why-button' href="mailto:pierrelieb@gmail.com">Email Me</a>
        
                </div>
            <div className='why-links'>
                    <a href="https://github.com/pierrelieben"> <BsGithub size={40} className="link_icon"/></a>
                    <a href="https://www.linkedin.com/in/pierre-liebenberg-0638a11b5/"> <BsLinkedin size={40} className="link_icon"/></a>
                    <a href="https://medium.com/codex/my-first-two-months-as-a-developer-in-a-start-up-environment-reflections-of-an-industrial-ea61aa45fe58"> <GrMedium size={40} className="link_icon"/></a>
            </div> 
    </div>
    </div>
    </div>
    
  )
}

export default Why