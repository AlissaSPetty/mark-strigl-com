import React, { Component } from "react";
import { reveal as Menu } from 'react-burger-menu';
import "./mobileMenu.scss";
import Links from "../Links/Links";

class mobileMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <Links />
      </Menu>
    );
  }
}

export default mobileMenu;