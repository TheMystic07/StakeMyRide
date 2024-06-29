
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page-Styling/create-ride.scss';
import { RideContext } from '../RideContext';
import { db } from '../Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const CreateRidePage = () => {
  const [formData, setFormData] = useState({
    Name: '',
    make: '',
    model: '',
    year: '',
    color: '',
    licensePlate: '',
    numberOfSeats: 0,
    pricePerSeat: 0,
    minNumberOfSeats: 0,
    departureDateTime: '',
    arrivalDateTime: '',
    pickupLocation: '',
    dropoffLocation: '',
  });

  const { setRideData, addRide } = useContext(RideContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: id === 'numberOfSeats' || id === 'pricePerSeat' || id === 'minNumberOfSeats' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRideData(formData);

    // Define rideData
    const rideData = {
      Name: formData.Name,
      make: formData.make,
      model: formData.model,
      year: formData.year,
      color: formData.color,
      licensePlate: formData.licensePlate,
      numberOfSeats: Number(formData.numberOfSeats),
      pricePerSeat: Number(formData.pricePerSeat),
      minNumberOfSeats: Number(formData.minNumberOfSeats),
      departureDateTime: Timestamp.fromDate(new Date(formData.departureDateTime)),
      arrivalDateTime: Timestamp.fromDate(new Date(formData.arrivalDateTime)),
      pickupLocation: formData.pickupLocation,
      dropoffLocation: formData.dropoffLocation,
    };

    // Validate the data
    if (
      !rideData.Name ||
      !rideData.make ||
      !rideData.model ||
      !rideData.year ||
      !rideData.color ||
      !rideData.licensePlate ||
      !rideData.numberOfSeats ||
      !rideData.pricePerSeat ||
      !rideData.minNumberOfSeats ||
      !rideData.departureDateTime ||
      !rideData.arrivalDateTime ||
      !rideData.pickupLocation ||
      !rideData.dropoffLocation
    ) {
      console.error('Missing required fields');
      alert('Please fill in all required fields.');
      return;
    }

    if (
      typeof rideData.Name !== 'string' ||
      typeof rideData.make !== 'string' ||
      typeof rideData.model !== 'string' ||
      typeof rideData.year !== 'string' ||
      typeof rideData.color !== 'string' ||
      typeof rideData.licensePlate !== 'string' ||
      typeof rideData.numberOfSeats !== 'number' ||
      typeof rideData.pricePerSeat !== 'number' ||
      typeof rideData.minNumberOfSeats !== 'number' ||
      typeof rideData.departureDateTime !== 'object' ||
      typeof rideData.arrivalDateTime !== 'object' ||
      typeof rideData.pickupLocation !== 'string' ||
      typeof rideData.dropoffLocation !== 'string'
    ) {
      console.error('Invalid field types');
      alert('Some fields have invalid data types. Please check your inputs.');
      return;
    }

    try {
      console.log('Submitting form data:', rideData);

      const docRef = await addDoc(collection(db, 'offeredRides'), rideData);
      console.log("Document written with ID: ", docRef.id);

      addRide(rideData); // Add the ride to the RideContext
      navigate('/find-ride');
    } catch (error) {
      console.error('Error adding document: ', error);
      if (error.code) console.error('Error code:', error.code);
      if (error.message) console.error('Error message:', error.message);
      if (error.details) console.error('Error details:', error.details);
      if (error.serverResponse) console.error('Server response:', error.serverResponse);
      alert('An error occurred while creating the ride. Please check the console for more details.');
    }
  };
  

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
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Enter Your name</label>
            <input type="text" id="Name" placeholder="e.g. Aditya" />
          </div>
          <div className="form-group">
            <label htmlFor="make">Car Company</label>
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
            <label htmlFor="licensePlate">License plate No.</label>
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
            <input type="datetime-local" id="departureDateTime" />
          </div>

          <div className="form-group">
            <label htmlFor="arrivalDateTime">Arrival date and time</label>
            <input type="datetime-local" id="arrivalDateTime" />
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
};

export default CreateRidePage;