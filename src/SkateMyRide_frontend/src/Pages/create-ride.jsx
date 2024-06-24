import React from 'react';
import './Page-Styling/create-ride.scss';

const CreateRidePage = () => {
  return (
    <div className="create-ride-container">
      <header className="header">
        <div className="logo">Roadshare</div>
        <div className="nav">
          <a href="#">About</a>
          <a href="#">Community</a>
          <a href="#">Docs</a>
          <button className="create-ride-button">Create a ride</button>
          <div className="profile-pic">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" />
          </div>
        </div>
      </header>

      <main className="main-content">
        <h1>Step 1 of 3</h1>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        <h2>Vehicle details</h2>

        <form>
          <div className="form-group">
            <label htmlFor="vehicleType">Vehicle type</label>
            <select id="vehicleType">
              <option value="" disabled selected>Select vehicle type</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="make">Make</label>
            <input type="text" id="make" placeholder="e.g. Toyota" />
          </div>

          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input type="text" id="model" placeholder="e.g. Camry" />
          </div>

          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input type="text" id="year" placeholder="e.g. 2020" />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input type="text" id="color" placeholder="e.g. white" />
          </div>

          <div className="form-group">
            <label htmlFor="licensePlate">License plate</label>
            <input type="text" id="licensePlate" placeholder="e.g. 123-ABC" />
          </div>

          <div className="form-group">
            <label htmlFor="numberOfSeats">Number of seats</label>
            <input type="number" id="numberOfSeats" min="1" placeholder="1" />
          </div>

          <div className="form-group">
            <label htmlFor="pricePerSeat">Price per seat (ICP)</label>
            <input type="number" id="pricePerSeat" min="0" step="0.01" placeholder="1.5" />
          </div>

          <div className="form-group">
            <label htmlFor="minNumberOfSeats">Minimum number of seats</label>
            <input type="number" id="minNumberOfSeats" min="1" placeholder="1" />
          </div>

          <h2>Ride details</h2>

          <div className="form-group">
            <label htmlFor="departureDateTime">Departure date and time</label>
            <input type="text" id="departureDateTime" placeholder="e.g. 2023-12-01 12:00" />
          </div>

          <div className="form-group">
            <label htmlFor="arrivalDateTime">Arrival date and time</label>
            <input type="text" id="arrivalDateTime" placeholder="e.g. 2023-12-01 12:00" />
          </div>

          <div className="form-group">
            <label htmlFor="pickupLocation">Pick-up location</label>
            <input type="text" id="pickupLocation" placeholder="e.g. San Francisco, CA" />
          </div>

          <div className="form-group">
            <label htmlFor="dropoffLocation">Drop-off location</label>
            <input type="text" id="dropoffLocation" placeholder="e.g. Los Angeles, CA" />
          </div>

          <button type="submit" className="next-button">Next</button>
        </form>
      </main>
    </div>
  );
}

export default CreateRidePage;
