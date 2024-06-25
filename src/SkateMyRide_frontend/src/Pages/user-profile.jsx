import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page-Styling/user-profile.scss';
import { FaUser, FaCar, FaEye, FaEyeSlash } from 'react-icons/fa';

const UserProfile = () => {
  const navigate = useNavigate();
  const [connectedWalletAccountAddress, setConnectedWalletAccountAddress] = useState('');
  const [showAddress, setShowAddress] = useState(false);

  useEffect(() => {
    const fetchConnectedWalletAddress = async () => {
      if (window.ic.plug && window.ic.plug.isConnected) {
        const response = await window.ic.plug.requestConnect({
          host: "https://mainnet-api.internetcomputer.org",
        });
        setConnectedWalletAccountAddress(response.accounts[0]);
      } else {
        console.log('Please install the Plug wallet browser extension!');
      }
    };

    fetchConnectedWalletAddress();
  }, []);

  const handleBecomeDriver = () => {
    navigate('/create-ride', { replace: true });
  };

  const toggleShowAddress = () => {
    setShowAddress(!showAddress);
  };

  return (
    <div className="profile-container">
      <header className="header">
        <div className="logo">Carpool</div>
        <nav className="nav">
          <a href="#">Rides</a>
          <a href="#">Food</a>
          <a href="#">Groceries</a>
          <a href="#">More</a>
          <button className="become-driver" onClick={handleBecomeDriver}>Become a driver</button>
        </nav>
      </header>

      <main className="main-content">
        <div className="profile-header">
          <h2>User Profile</h2>
          <div className="profile-buttons">
            <button className="become-driver" onClick={handleBecomeDriver}>Become a driver</button>
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
              <h4>Account Address</h4>
              <div className="address-container">
                <p>{showAddress ? connectedWalletAccountAddress : '••••••••••••••••••••••••••••••••••••'}</p>
                <span className="toggle-address" onClick={toggleShowAddress}>
                  {showAddress ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
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
