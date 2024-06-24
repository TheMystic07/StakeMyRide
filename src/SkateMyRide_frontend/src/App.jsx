import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../index.css'

import Home from './Components/Home'; // DONE 
import FindRide from './Pages/find-ride'; // DONE
import BookRide from './Pages/book-ride'; // DONE
import CreateRidePage from './Pages/create-ride'; // done
import UserProfile from './Pages/user-profile'; // done
import NotFound from './Pages/NotFound'; // done

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default page */}
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/book-ride" element={<BookRide />} />
          <Route path="/create-ride" element={<CreateRidePage />} />
          <Route path="/find-ride" element={<FindRide />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/NotFound" element={<NotFound />} /> {/* Add a catch-all route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;