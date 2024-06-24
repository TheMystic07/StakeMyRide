import React from 'react';
import './Page-Styling/user-profile.scss';
import { FaUser, FaEnvelope, FaLock, FaMoneyCheck, FaPhone, FaCar } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <header className="header">
        <div className="logo">Carpool</div>
        <nav className="nav">
          <a href="#">Rides</a>
          <a href="#">Food</a>
          <a href="#">Groceries</a>
          <a href="#">More</a>
          <button className="become-driver">Become a driver</button>
          <div className="profile-pic">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" />
          </div>
        </nav>
      </header>
      
      <main className="main-content">
        <div className="profile-header">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="profile-picture" />
          <h2>Sophia Walker</h2>
          <p>4.86 · 38 rides · 1 review</p>
          <div className="profile-buttons">
            <button className="edit-profile">Edit Profile</button>
            <button className="become-driver">Become a driver</button>
          </div>
        </div>
        
        <div className="tabs">
          <button className="tab active">Personal Info</button>
          <button className="tab">Booking History</button>
          <button className="tab">Offered Rides</button>
        </div>

        <section className="personal-info">
          <h3>Personal Info</h3>
          <div className="info-group">
            <FaUser className="icon" />
            <div>
              <h4>Name</h4>
              <p>Sophia Walker</p>
            </div>
          </div>

          <div className="info-group">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>sophia@walker.com</p>
            </div>
          </div>

          <div className="info-group">
            <FaLock className="icon" />
            <div>
              <h4>Password</h4>
              <p>•••••••••••••••••</p>
            </div>
          </div>

          <div className="info-group">
            <FaMoneyCheck className="icon" />
            <div>
              <h4>Payment</h4>
              <p>•••••••••••••••••</p>
            </div>
          </div>

          <div className="info-group">
            <FaPhone className="icon" />
            <div>
              <h4>Phone</h4>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </section>

        <section className="booking-history">
          <h3>Booking History</h3>
          {Array(6).fill().map((_, index) => (
            <div className="history-item" key={index}>
              <FaCar className="icon" />
              <div>
                <h4>Completed</h4>
                <p>Feb {28 - index}, 2022</p>
              </div>
            </div>
          ))}
          <a href="#" className="view-all">View all</a>
        </section>

        <section className="offered-rides">
          <h3>Offered Rides</h3>
          {Array(2).fill().map((_, index) => (
            <div className="history-item" key={index}>
              <FaCar className="icon" />
              <div>
                <h4>Completed</h4>
                <p>Feb {25 - index}, 2022</p>
              </div>
            </div>
          ))}
          <a href="#" className="view-all">View all</a>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;
