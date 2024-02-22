
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import LoginForm from './components/Login';
import Home from './components/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/home"
          element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </Router>
  );
};

export default App;



