import React, { useState, Component } from "react";
import axios from 'axios';
import "../../assets/style/follow/follow.css";
class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollow: false,
      followerValue: 0,
      followingValue: 0,
      id: this.props.id,
    };
    this.following = this.following.bind(this);
    this.unFollow = this.unFollow.bind(this);
    
  }
   followToken = {
      headers: {
      "access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4YjA1NWE2NTZlMTE1ODg4NDJjNGMyNzBiZjU3Nzg2IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrIiwiaWF0IjoxNTk4Njg1ODA1LCJleHAiOjE1OTg2ODc2MDV9.xyHmjGffwa3TPChjbaxZw1qUY74HhhIEXHA83TfWkRM"
    }
  }
  

  following() {
    const res = axios.get('http://52.78.186.198:3000/follow/' + this.state.id, this.followToken);
    this.setState({isFollow: true, followerValue: this.state.followerValue + 1});
  }

  unFollow() {
    const res = axios.delete('http://52.78.186.198:3000/follow/' + this.state.id, this.followToken);
    this.setState({isFollow: false, followerValue: this.state.followerValue - 1})
  }
   
  render() {
    return (
      <React.Fragment>

<div className="profile">
<div className="otherProfile"></div>
{ this.state.isFollow ? (
    <button className="following" onClick={this.unFollow}>팔로잉</button>
           ) : (
            <button className="following" onClick={this.following}>팔로우</button>
  
          
        )}
          <p id="otherId">rin3583</p>
          <p id="otherEmail">@user.email.com</p>
        <div className="followers">
        <a>{this.state.followerValue} 팔로워</a>
        <a>{this.state.followingValue} 팔로잉</a>
        </div>
        </div>

      </React.Fragment>
    );
  }
}
export default Follow;
