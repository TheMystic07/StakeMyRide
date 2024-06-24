import img from '../images/car_pool.png';
import React, { useState, useEffect } from 'react';
import './Home.scss';
import { FaSearch, FaSun, FaMoon, FaCar } from 'react-icons/fa';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`home-container ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <div className="logo flex items-center">
          <FaCar className="app-icon" />
          <span>Carpool</span>
        </div>
        <nav className="nav">
          <a href="#">About</a>
          <a href="#">How it works</a>
          <a href="#">Safety</a>
          <a href="#">Pricing</a>
          <a href="#" className="signup">Sign up</a>
          <a href="#" className="login">Log in</a>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-image-wrapper">
          <img src={img} alt="Carpool Illustration" className="hero-image" />
          <div className="hero-content">
            <h1>Ride together. Save together.</h1>
            <p>Find or offer a ride with people you trust. Carpool is the future of ridesharing.</p>
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Where are you going?" />
              <button>Submit</button>
            </div>
          </div>
        </div>

        <section className="cta-section">
          <h2>Ready to go?</h2>
          <button className="find-ride">Find a ride</button>
        </section>

        <section className="why-carpool">
          <h2>Why Carpool?</h2>
          <div className="cards">
            <div className="card">
              <h3>Ride with friends</h3>
              <p>Find familiar faces & make new friends during your journey. With Carpool, you belong to a community.</p>
            </div>
            <div className="card">
              <h3>Chat with your driver</h3>
              <p>Ask questions, chat with your driver, and plan your trip together.</p>
            </div>
            <div className="card">
              <h3>Get home sooner</h3>
              <p>Carpool rides help you reach your destination faster. Skip the public transport hassle!</p>
            </div>
            <div className="card">
              <h3>Safety first</h3>
              <p>Your safety is our priority. Verified profiles and our community ensure a safe journey every time.</p>
            </div>
          </div>
        </section>
      </main>
      <div className="msg" style={{ textAlign: 'center', position: ' ', bottom: '0' }}>
        <h1>Made By Aditya With ❤️ </h1>
      </div>
    </div>
  );
};

export default Home;
