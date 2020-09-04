import React from "react";
import "../../assets/style/profile/profile.css";
import Follow from '../follow/Follow';
import Sidebar from "../Sidebar/Sidebar";
import Hedaer from "../header/Header"

function OtherUser(props) {
  const {id} = props.match.params
    return (
      <div>
        <Sidebar></Sidebar>
        <Hedaer></Hedaer>
        <div className="userContainer">
          <div className="background"></div>
          <Follow id={id}/>
        </div>
      </div>
     
    );
  }

export default OtherUser;
