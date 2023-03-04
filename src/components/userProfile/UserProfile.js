import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
          <img src="https://th.bing.com/th/id/OIP.ajmo-8H7DyCxDJ9lg8crrAHaH6?w=205&h=220&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="User Profile Picture" />
          </div>
          <h4>PRADEEP S</h4>
          
        </div>
      </div>
    );
  }
}