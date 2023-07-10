import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  return React.createElement('nav', { className: 'navbar' },
    React.createElement('div', { className: 'navbar__center' },
      React.createElement('div', { className: 'navbar__item' },
        React.createElement(Link, { to: '/' },
          React.createElement('img', { src: '/icons/Home-Icon.png', alt: 'Home', style: iconStyle }),
          React.createElement('span', null, 'Home')
        )
      ),
      React.createElement('div', { className: 'navbar__item' },
        React.createElement(Link, { to: '/food' },
          React.createElement('img', { src: '/icons/Food-Icon.png', alt: 'Food', style: iconStyle }),
          React.createElement('span', null, 'Food')
        )
      ),
      React.createElement('div', { className: 'navbar__item' },
        React.createElement(Link, { to: '/adventure' },
          React.createElement('img', { src: '/icons/Adventure-Icon.png', alt: 'Adventure', style: iconStyle }),
          React.createElement('span', null, 'Adventure')
        )
      ),
      React.createElement('div', { className: 'navbar__item' },
        React.createElement(Link, { to: '/shopping' },
          React.createElement('img', { src: '/icons/Shopping-Icon.png', alt: 'Shopping', style: iconStyle }),
          React.createElement('span', null, 'Shopping')
        )
      ),
      React.createElement('div', { className: 'navbar__item' },
        React.createElement(Link, { to: '/historical' },
          React.createElement('img', { src: '/icons/Historical-Icon.png', alt: 'Historical', style: iconStyle }),
          React.createElement('span', null, 'Historical')
        )
      ),
      React.createElement('div', { className: 'navbar__item' },
        React.createElement(Link, { to: '/nightlife' },
          React.createElement('img', { src: '/icons/Nightlife-Icon.png', alt: 'Nightlife', style: iconStyle }),
          React.createElement('span', null, 'Nightlife')
        )
      )
    )
  );
};

export default NavigationBar;


