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
        {/* <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h5>Information</h5>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div> */}
      </div>
    );
  }
}