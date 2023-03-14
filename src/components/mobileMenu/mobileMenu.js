import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./mobileMenu.scss";
import Links from "../Links/Links";

class MobileMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Menu right>
          <Links />
        </Menu>
      </>
    );
  }
}

export default MobileMenu;
