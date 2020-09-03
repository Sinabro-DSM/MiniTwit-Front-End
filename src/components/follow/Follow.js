import React, { useState, Component } from "react";
import axios from 'axios';
import "../../assets/style/follow/follow.css";
class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollow: true,
    };
    this.following = this.following.bind(this);
  }

  following() {
      const res = axios.get('http://3.34.198.6:3000/follow',);
  }

  
  render() {
    return (
      <React.Fragment>
        {this.state.isFollow ? (
          <button className="following" onClick={this.following}>팔로우</button>
        ) : (
          <button className="following">팔로잉</button>
        )}

             
<div className="profile">
          <p id="otherId">rin3583</p>
          <p id="otherEmail">@user.email.com</p>
        <div className="followers">
        <a>0 팔로워</a>
        <a>0 팔로잉</a>
        </div>
        </div>

      </React.Fragment>
    );
  }
}
export default Follow;
