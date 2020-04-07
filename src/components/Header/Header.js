import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    // standard JS can be used
    console.log(this.props);

    return (
      <header>
        <img src={logo} className="logo" alt="react logo" />
        <h1 className="primaryHdg">{this.props.title}</h1>
        <button onClick={this.props.somethingElse}>Greeting</button>
      </header>
    );
  }
}

export default Header;