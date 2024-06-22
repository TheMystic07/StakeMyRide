import React from 'react';

const Header = () => (
  <header>
    <div className="logo">Neighborhood</div>
    <nav>
      <a href="#explore">Explore</a>
      <a href="#host">Host</a>
      <a href="#stay">Stay</a>
      <button>Help</button>
    </nav>
    <div className="profile-pic">
      {/* Add profile picture here */}
    </div>
  </header>
);

const RideDetail = ({ icon, title, description }) => (
  <div className="ride-detail">
    <span className="icon">{icon}</span>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const BookRide = () => {
  return (
    <div className="book-ride-container">
      <Header />
      <main>
        <h1>Book a ride</h1>
        <p>Select a pickup and drop-off location to view available rides</p>
        
        <section>
          <h2>Ride details</h2>
          <RideDetail icon="📍" title="Pickup location" description="San Francisco, CA" />
          <RideDetail icon="📍" title="Drop-off location" description="San Francisco, CA" />
          <RideDetail icon="🕒" title="Pickup time" description="Today, 5:00 PM" />
        </section>
        
        <section>
          <h2>Ride details</h2>
          <RideDetail icon="🚗" title="Vehicle" description="2 seats available" />
          <RideDetail icon="👤" title="Driver" description="Female, age 40, profile photo" />
          <RideDetail icon="💵" title="Price" description="$12" />
        </section>
        
        <button className="book-button">Book ride</button>
      </main>
    </div>
  );
};

export default BookRide;