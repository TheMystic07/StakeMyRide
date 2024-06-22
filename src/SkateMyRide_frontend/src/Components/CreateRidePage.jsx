import React, { useState } from 'react';


const Header = () => (
  <header>
    <div className="logo">▲ Roadshare</div>
    <nav>
      <a href="#about">About</a>
      <a href="#community">Community</a>
      <a href="#docs">Docs</a>
      <button className="create-ride-btn">Create a ride</button>
    </nav>
    <div className="profile-pic">
      {/* Add profile picture here */}
    </div>
  </header>
);

const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div className="input-field">
    <label>{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SelectField = ({ label, options, value, onChange }) => (
  <div className="select-field">
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      <option value="">Select vehicle type</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const CreateRideForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    make: '',
    model: '',
    year: '',
    color: '',
    licensePlate: '',
    seats: '',
    pricePerSeat: '',
    minSeats: '',
    departureDateTime: '',
    arrivalDateTime: '',
    pickupLocation: '',
    dropoffLocation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Vehicle details</h2>
      <SelectField 
        label="Vehicle type" 
        options={['Sedan', 'SUV', 'Van']} 
        value={formData.vehicleType} 
        onChange={handleChange}
      />
      <InputField label="Make" type="text" placeholder="e.g. Toyota" name="make" value={formData.make} onChange={handleChange} />
      <InputField label="Model" type="text" placeholder="e.g. Camry" name="model" value={formData.model} onChange={handleChange} />
      <InputField label="Year" type="text" placeholder="e.g. 2020" name="year" value={formData.year} onChange={handleChange} />
      <InputField label="Color" type="text" placeholder="e.g. white" name="color" value={formData.color} onChange={handleChange} />
      <InputField label="License plate" type="text" placeholder="e.g. 123-ABC" name="licensePlate" value={formData.licensePlate} onChange={handleChange} />
      <InputField label="Number of seats" type="number" placeholder="1" name="seats" value={formData.seats} onChange={handleChange} />
      <InputField label="Price per seat (ICP)" type="number" placeholder="1.5" name="pricePerSeat" value={formData.pricePerSeat} onChange={handleChange} />
      <InputField label="Minimum number of seats" type="number" placeholder="1" name="minSeats" value={formData.minSeats} onChange={handleChange} />

      <h2>Ride details</h2>
      <InputField label="Departure date and time" type="datetime-local" name="departureDateTime" value={formData.departureDateTime} onChange={handleChange} />
      <InputField label="Arrival date and time" type="datetime-local" name="arrivalDateTime" value={formData.arrivalDateTime} onChange={handleChange} />
      <InputField label="Pick-up location" type="text" placeholder="e.g. San Francisco, CA" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} />
      <InputField label="Drop-off location" type="text" placeholder="e.g. Los Angeles, CA" name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} />

      <button type="submit" className="next-btn">Next</button>
    </form>
  );
};

const CreateRidePage = () => {
  return (
    <div className="create-ride-page">
      <Header />
      <main>
        <h1>Step 1 of 3</h1>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <CreateRideForm />
      </main>
    </div>
  );
};

export default CreateRidePage;