
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';
const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    
    navigate('/login');
    return null;
  }

  return (
    <div className='home'>
      
      <h1>Welcome to Home Page</h1>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
     
    </div>
  );
};

export default Home;
