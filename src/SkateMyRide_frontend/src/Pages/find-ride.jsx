import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Page-Styling/FindRide.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const FindRidePage = () => {
  const [offeredRides, setOfferedRides] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0); // State to store total payment
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pickupLocation = queryParams.get("pickup");
  const destinationLocation = queryParams.get("destination");

  useEffect(() => {
    const fetchOfferedRides = async () => {
      const querySnapshot = await getDocs(collection(db, "offeredRides"));
      const rides = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        departureDateTime: doc.data().departureDateTime.toDate(),
        arrivalDateTime: doc.data().arrivalDateTime.toDate(),
        totalPayment: 0, // Initialize total payment in each ride object
      }));

      const filteredRides = rides.filter(
        (ride) =>
          ride.pickupLocation &&
          ride.dropoffLocation &&
          pickupLocation &&
          destinationLocation &&
          ride.pickupLocation.toLowerCase() === pickupLocation.toLowerCase() &&
          ride.dropoffLocation.toLowerCase() === destinationLocation.toLowerCase()
      );

      setOfferedRides(filteredRides);
    };

    fetchOfferedRides();
  }, [pickupLocation, destinationLocation]);

  // Function to calculate total payment
  const calculateTotalPayment = (pricePerSeat, numberOfSeats) => {
    return pricePerSeat * numberOfSeats;
  };

  // Function to handle booking ride
  const handleBookRide = (ride, pricePerSeat, numberOfSeats) => {
    const totalPayment = calculateTotalPayment(pricePerSeat, numberOfSeats);
    setTotalPayment(totalPayment);

    // Update the ride object with total payment
    const updatedRides = offeredRides.map((r) => {
      if (r.id === ride.id) {
        return {
          ...r,
          totalPayment: totalPayment,
        };
      }
      return r;
    });

    setOfferedRides(updatedRides);
    // Optionally, you can perform further actions like initiating payment process here
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Find a ride</h1>
        {offeredRides.length > 0 ? (
          <>
            <p>From {pickupLocation} to {destinationLocation}</p>
            <div className="location">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h2>{pickupLocation}</h2>
              </div>
            </div>
            <h1>TO</h1>
            <div className="location">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h2>{destinationLocation}</h2>
              </div>
            </div>
          </>
        ) : (
          <p>No rides available for the requested locations!</p>
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
            offeredRides.map((ride) => (
              <div className="ride" key={ride.id}>
                <div className="profile-picture">
                  <img
                    src={`https://randomuser.me/api/portraits/thumb/men/${ride.id}.jpg`}
                    alt="Profile"
                  />
                </div>
                <div className="ride-info">
                  <h4>{ride.Name}</h4>
                  <p>{ride.departureDateTime.toLocaleString()} - {ride.arrivalDateTime.toLocaleString()}</p>
                  <p>{ride.pickupLocation} - {ride.dropoffLocation}</p>
                  <p>Car: {ride.make} {ride.model} {ride.year} {ride.color}</p>
                  <p>License Plate: {ride.licensePlate}</p>
                  <p>Number of Seats: {ride.numberOfSeats}</p>
                  <p>Price per Seat: {ride.pricePerSeat}</p>
                  <p>Minimum Number of Seats: {ride.minNumberOfSeats}</p>
                  {ride.totalPayment > 0 && (
                    <div className="total-payment">
                      <h3>Total Payment:</h3>
                      <p>{ride.totalPayment} ICP test tokens</p>
                    </div>
                  )}
                  <button onClick={() => handleBookRide(ride, ride.pricePerSeat, ride.numberOfSeats)}>Book Ride</button>
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
