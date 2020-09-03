import React from "react";
import "../../assets/style/profile/profile.css";
import ProfileEdit from "./ProfileEdit";
import Follow from '../follow/Follow';

function OtherUser(id) {
    return (
      <div className="userContainer">
        <div className="background"></div>
        <div className="otherProfile"></div>
        <Follow />
      </div>
    );
  }

export default OtherUser;
