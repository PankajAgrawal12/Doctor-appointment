import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import HeroSection from './HeroSection';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/search?term=${searchTerm}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="home-page">
      {/* <HeroSection/> */}
      <div className="hero-section">
        <h1>Find a Doctor</h1>
        <input
          type="text"
          placeholder="Search by specialty"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
    </div>
  );
};

export default HomePage;
