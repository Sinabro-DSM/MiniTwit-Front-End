import React, { Component } from "react";
import "../../assets/style/profile/profile.css";
import Follow from '../follow/Follow';
import Sidebar from "../Sidebar/Sidebar";
import Hedaer from "../header/Header"

class OtherUser extends Component {
  state = {
    name: ""
  }
  setName = (user) => {
    this.setState({name: user});
  }
  render() {
  const {id} = this.props.match.params
    return (
      <div>
        <Sidebar></Sidebar>
        <Hedaer name={this.state.name}></Hedaer>
        <div className="userContainer">
          <div className="background"></div>
          <Follow id={id} refresh={this.props.refresh} setName={this.setName} baseUrl={this.props.baseUrl}/>
        </div>
      </div>
     
    );
  }
}

export default OtherUser;
