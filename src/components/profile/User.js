import React from "react";
import "../../assets/style/profile/profile.css";

function User() {
  return (
    <div className="userContainer">
      <div className="background"></div>
      <div className="profilePicture"></div>
      <div className="profile">
        <p id="id">rin3583</p>
        <p id="email">@user.email.com</p>
      </div>
    </div>
  );
}

export default User;
