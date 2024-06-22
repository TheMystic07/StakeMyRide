// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookRide from './Components/BookRide';
import CreateRidePage from './Components/CreateRidePage';
import FindRide from './Components/FindRide';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-ride" element={<BookRide />} />
          <Route path="/create-ride" element={<CreateRidePage />} />
          <Route path="/find-ride" element={<FindRide />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;