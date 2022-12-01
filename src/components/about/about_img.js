import React, { useEffect, useState } from "react";
import './about.css'

import aa1 from "../../img/mood.PNG"
import aa2 from "../../img/namib.jpeg"
import aa3 from "../../img/IMG_0850.jpg"
import aa4 from "../../img/IMG_5629.JPG"
import aa6 from "../../img/k.jpeg"
import aa5 from "../../img/snow.jpeg"

const images = [aa1, aa2, aa3, aa4, aa5, aa6];

export default function ImageSwapper() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
                <div className="a-card">
                    <img src={currentImage} className="a-img" alt="About me"/>
                </div>
                </div>
    )
}