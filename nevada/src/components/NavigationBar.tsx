import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__item">
          <Link to="/">
            <img src="/icons/Home-Icon.png" alt="Home" style={iconStyle} />
            <span>Home</span>
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/food">
            <img src="/icons/Food-Icon.png" alt="Food" style={iconStyle} />
            <span>Food</span>
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/adventure">
            <img src="/icons/Adventure-Icon.png" alt="Adventure" style={iconStyle} />
            <span>Adventure</span>
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/shopping">
            <img src="/icons/Shopping-Icon.png" alt="Shopping" style={iconStyle} />
            <span>Shopping</span>
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/historical">
            <img src="/icons/Historical-Icon.png" alt="Historical" style={iconStyle} />
            <span>Historical</span>
          </Link>
        </div>
        <div className="navbar__item">
          <Link to="/nightlife">
            <img src="/icons/Nightlife-Icon.png" alt="Nightlife" style={iconStyle} />
            <span>Nightlife</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;


