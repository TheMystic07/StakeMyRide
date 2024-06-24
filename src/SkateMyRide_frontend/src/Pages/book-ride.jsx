import React from 'react';
import './Page-Styling/book-ride.scss';
import { FaMapMarkerAlt, FaClock, FaCar, FaUser, FaDollarSign } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const BookRide = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');

  return (
    <div className="book-ride-container">
      <header className="header">
        <div className="logo">Neighborhood</div>
        <div className="nav">
          <a href="#">Explore</a>
          <a href="#">Host</a>
          <a href="#">Stay</a>
          <a className="help" href="#">Help</a>
          <div className="profile-pic">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" />
          </div>
        </div>
      </header>

      <main className="main-content">
        <h1>Book a ride</h1>
        <p className="subtitle">Select a pickup and drop-off location to view available rides</p>

        <div className="ride-details">
          <h2>Ride details</h2>

          <div className="detail-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Pickup location</h3>
              <p>San Francisco, CA</p>
            </div>
          </div>

          <div className="detail-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Drop-off location</h3>
              <p>{destination}</p>
            </div>
          </div>

          <div className="detail-item">
            <FaClock className="icon" />
            <div>
              <h3>Pickup time</h3>
              <p>Today, 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="ride-details">
          <h2>Ride details</h2>

          <div className="detail-item">
            <FaCar className="icon" />
            <div>
              <h3>Vehicle</h3>
              <p>2 seats available</p>
            </div>
          </div>

          <div className="detail-item">
            <FaUser className="icon" />
            <div>
              <h3>Driver</h3>
              <p>Female, age 40, profile photo</p>
            </div>
          </div>

          <div className="detail-item">
            <FaDollarSign className="icon" />
            <div>
              <h3>Price</h3>
              <p>$12</p>
            </div>
          </div>
        </div>

        <button className="book-ride-button">Book ride</button>
      </main>
    </div>
  );
}

export default BookRide;
