import React, { Component } from "react";

// IMG
import profile from "../img/profile.png";
import menu from "../img/menu.png";
import closeMenu from "../img/closeMenu.png";

// STYLE
import "./header.css";

export default class Header extends Component {
  state = {
    expandLogin: false,
    expandMenu: false
  };
  render() {
    const { expandLogin, expandMenu } = this.state;
    return (
      <div className="header">
        <img
          src={profile}
          alt="profile"
          className="imageProfile"
          onClick={() =>
            this.setState({ expandLogin: !expandLogin, expandMenu: false })
          }
        />
        {!expandMenu ? (
          <img
            src={menu}
            alt="menu"
            className="imageMenu"
            onClick={() =>
              this.setState({ expandLogin: false, expandMenu: !expandMenu })
            }
          />
        ) : (
          <img
            src={closeMenu}
            alt="menu"
            className="closeMenu"
            onClick={() =>
              this.setState({ expandLogin: false, expandMenu: !expandMenu })  
            }
          />
        )}
        
        {expandLogin && (
          <div className="containerExpandLogin">
            <h4>Create Account</h4>
            <h4>Log In</h4>
          </div>
        )}
        {expandMenu && (
          <div className="containerMenu">
            <h4>Cities</h4>
            <h4>Restaurant</h4>
          </div>
        )}
      </div>
    );
  }
}
