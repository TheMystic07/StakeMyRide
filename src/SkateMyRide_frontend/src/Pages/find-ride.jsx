import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Page-Styling/FindRide.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const FindRidePage = () => {
  const [offeredRides, setOfferedRides] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pickupLocation = queryParams.get('pickup');
  const destinationLocation = queryParams.get('destination');

  useEffect(() => {
    const fetchOfferedRides = async () => {
      const querySnapshot = await getDocs(collection(db, 'offeredRides'));
      const rides = querySnapshot.docs.map((doc) => doc.data());

      // Filter rides based on pickup and destination locations
      const filteredRides = rides.filter(
        (ride) =>
          ride.pickupLocation.toLowerCase() === pickupLocation.toLowerCase() &&
          ride.dropoffLocation.toLowerCase() === destinationLocation.toLowerCase()
      );

      setOfferedRides(filteredRides);
    };

    fetchOfferedRides();
  }, [pickupLocation, destinationLocation]);

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Find a ride</h1>
        {offeredRides.length > 0 && (
          <>
            <p>From {offeredRides[0].pickupLocation} to {offeredRides[0].dropoffLocation}</p>

            <div className="location">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h2>{offeredRides[0].pickupLocation}</h2>
                <p className="time">Leaving {offeredRides[0].departureDateTime.toDate().toLocaleString()}</p>
              </div>
            </div>
            <h1>TO</h1>
            <div className="location">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h2>{offeredRides[0].dropoffLocation}</h2>
                <p className="time">Leaving {offeredRides[0].arrivalDateTime.toDate().toLocaleString()}</p>
              </div>
            </div>
          </>
        )}
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
          {offeredRides.length > 0 ? (
            offeredRides.map((ride, index) => (
              <div className="ride" key={index}>
                <div className="profile-picture">
                  <img src={`https://randomuser.me/api/portraits/thumb/men/${index}.jpg`} alt="Profile" />
                </div>
                <div className="ride-info">
                  <h4>{ride.Name}</h4>
                  <p>{ride.departureDateTime.toDate().toLocaleString()} - {ride.arrivalDateTime.toDate().toLocaleString()}</p>
                  <p>{ride.pickupLocation} - {ride.dropoffLocation}</p>
                  <p>Car: {ride.make} {ride.model} {ride.year} {ride.color}</p>
                  <p>License Plate: {ride.licensePlate}</p>
                  <p>Number of Seats: {ride.numberOfSeats}</p>
                  <p>Price per Seat: {ride.pricePerSeat}</p>
                  <p>Minimum Number of Seats: {ride.minNumberOfSeats}</p>
                  <button>Book Ride</button>
                </div>
              </div>
            ))
          ) : (
            <p>No rides available for the requested locations!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindRidePage;
