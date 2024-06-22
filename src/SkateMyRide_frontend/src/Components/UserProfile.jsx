import React, { useState } from 'react';
function UserProfile() {
  const [name, setName] = useState('Sophia Walker');
  const [email, setEmail] = useState('sophia@walker.com');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [rides, setRides] = useState(38);
  const [rating, setRating] = useState(4.86);
  const [reviews, setReviews] = useState(1);
  const [completedRides, setCompletedRides] = useState([
    { date: 'Mar 1, 2022', status: 'Completed' },
    { date: 'Feb 28, 2022', status: 'Completed' },
    { date: 'Feb 28, 2022', status: 'Completed' },
    { date: 'Feb 28, 2022', status: 'Completed' },
    { date: 'Feb 27, 2022', status: 'Completed' },
    { date: 'Feb 27, 2022', status: 'Completed' },
    { date: 'Feb 26, 2022', status: 'Completed' },
    { date: 'Feb 26, 2022', status: 'Completed' },
    { date: 'Feb 25, 2022', status: 'Completed' },
    { date: 'Feb 24, 2022', status: 'Completed' }
  ]);

  return (
    <div>
      <h1>Stake My Ride</h1>
      <div>
        <h2>Sophia Walker</h2>
        <p>4.86 · {rides} rides · {reviews} review</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Phone: {phone}</p>
        <h3>Completed Rides</h3>
        <ul>
          {completedRides.map((ride, index) => (
            <li key={index}>{ride.date} - {ride.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;