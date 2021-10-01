import React from 'react';
import logo from '../../../img/logo.svg';
import { Button } from './Button';
import { MenuItems } from './MenuItem';
import './Navbar.css'

class Navbar extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div className="head">
        <nav className="NavbarItems">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <Button>Login</Button>
          <button className="buttonSignUp">Sign UP</button>
        </nav>
      </div>
    );
  }
}

export { Navbar };