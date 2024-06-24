import React from 'react';
import './Page-Styling/FindRide.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h1>Find a ride</h1>
        <p>From SF to LA, 10/1/2022</p>

        <div className="location">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h2>San Francisco</h2>
            <p className="time">Leaving 9:00am</p>
          </div>
        </div>

        <div className="location">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h2>Los Angeles</h2>
            <p className="time">Leaving 5:00pm</p>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="filter">
          <h3>Filter</h3>
          <button>Price</button>
          <button>Time</button>
          <button>Seats</button>
          <button>Stops</button>
        </div>

        <div className="sort">
          <h3>Sort</h3>
          <button>Cheapest</button>
          <button>Fastest</button>
          <button>Best</button>
        </div>

        <div className="rides">
          {Array(5).fill().map((_, index) => (
            <div className="ride" key={index}>
              <div className="profile-picture">
                <img src={`https://randomuser.me/api/portraits/thumb/men/${index}.jpg`} alt="Profile" />
              </div>
              <div className="ride-info">
                <h4>John</h4>
                <p>9:00am - 3:00pm</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
