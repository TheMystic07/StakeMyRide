import img from "../images/car_pool.png";
import React, { useState, useEffect } from "react";
import "./Home.scss";
import { FaSearch, FaSun, FaMoon, FaCar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchInput, setSearchInput] = useState({ pickup: "", destination: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/find-ride?pickup=${searchInput.pickup}&destination=${searchInput.destination}`);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`home-container ${darkMode ? "dark" : ""}`}>
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
          <button className="connect-wallet" onClick={() => alert("Connect Wallet")}>
            Connect Wallet
          </button>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-image-wrapper">
          <img src={img} alt="Carpool Illustration" className="hero-image" />
          <div className="hero-text">
            <h1>Ride together. Save together.</h1>
            <p>
              Find or offer a ride with people you trust. Carpool is the future
              of ridesharing.
            </p>
          </div>
        </div>
        <div className="hero-content">
          <form onSubmit={handleSubmit}>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter Pickup location"
                value={searchInput.pickup}
                onChange={(event) => setSearchInput({ ...searchInput, pickup: event.target.value })}
              />
              <div className="divider"></div>
              <input
                type="text"
                placeholder="Enter Destination"
                value={searchInput.destination}
                onChange={(event) => setSearchInput({ ...searchInput, destination: event.target.value })}
              />
              <button type="submit"><FaSearch /></button>
            </div>
          </form>
        </div>

        <section className="why-carpool">
          <h2>Why Carpool?</h2>
          <div className="cards">
            <div className="card">
              <h3>Ride with friends</h3>
              <p>
                Find familiar faces & make new friends during your journey. With
                Carpool, you belong to a community.
              </p>
            </div>
            <div className="card">
              <h3>Chat with your driver</h3>
              <p>
                Ask questions, chat with your driver, and plan your trip
                together.
              </p>
            </div>
            <div className="card">
              <h3>Get home sooner</h3>
              <p>
                Carpool rides help you reach your destination faster. Skip the
                public transport hassle!
              </p>
            </div>
            <div className="card">
              <h3>Safety first</h3>
              <p>
                Your safety is our priority. Verified profiles and our community
                ensure a safe journey every time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="msg">
        <h1>Made By Aditya With ❤️</h1>
      </div>
    </div>
  );
};

export default Home;
