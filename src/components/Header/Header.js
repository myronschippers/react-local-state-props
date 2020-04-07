import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    // standard JS can be used
    const title = 'React Components';

    return (
      <header>
        <img src={logo} className="logo" alt="react logo" />
        <h1 className="primaryHdg">{title}</h1>
      </header>
    );
  }
}

export default Header;