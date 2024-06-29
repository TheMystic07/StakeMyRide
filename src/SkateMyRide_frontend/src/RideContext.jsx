// RideContext.jsx

import React, { createContext, useState } from 'react';

export const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [rideData, setRideData] = useState({});
  const [offeredRides, setOfferedRides] = useState([]);

  const addRide = (ride) => {
    console.log('Adding ride:', ride);
    setOfferedRides((prevOfferedRides) => {
      console.log('Previous offeredRides:', prevOfferedRides);
      const updatedOfferedRides = [...prevOfferedRides, ride];
      console.log('Updated offeredRides:', updatedOfferedRides);
      return updatedOfferedRides;
    });
  };

  return (
    <RideContext.Provider value={{ rideData, setRideData, offeredRides, addRide }}>
      {children}
    </RideContext.Provider>
  );
};
