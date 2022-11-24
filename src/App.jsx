import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Why from "./components/why/Why";
import React, { useState, useEffect } from 'react';
import './app.css'
import Load from './img/load.svg'

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div className="container">
    {loading ? (
      <div className="loader-container">
        <div >
        <img src={Load} alt="Load" className='loader' />
        </div>
      </div>
    ) : (
  <div>
  <Intro/>
  <About/>
  <Why/>
  </div>
  )}
  </div>

  )
};

export default App;