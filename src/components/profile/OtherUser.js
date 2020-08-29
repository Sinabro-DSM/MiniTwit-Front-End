import React from "react";
import "../../assets/style/profile/profile.css";
import ProfileEdit from "./ProfileEdit";
import Follow from '../follow/Follow';

function OtherUser(props) {
    const {id} = props.match.params
    console.log(id);
    return (
      <div className="userContainer">
        <div className="background"></div>
        <Follow id={id} />
      </div>
    );
  }

export default OtherUser;
