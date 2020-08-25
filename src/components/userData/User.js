import React from "react";
import "../../assets/style/profile/profile.css";
import Follow from "../follow/Follow";

function User() {
  return (
    <div className="userContainer">
      <div className="background"></div>
      <div className="profilePicture"></div>
      <div className="profile">
        <p id="id">rin3583</p>
        <p id="email">@user.email.com</p>
        <Follow />
      </div>
    </div>
  );
}

export default User;
