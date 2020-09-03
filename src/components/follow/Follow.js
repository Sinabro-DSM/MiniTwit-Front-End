import React, { useState, Component } from "react";
import axios from 'axios';
import OtherUserFeed from '../profile/OtherUserFeed';
import "../../assets/style/follow/follow.css";

class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewFeed: [],
      userEmail: "",
      userName: "",
      userImg: "",
      isFollow: false,
      followerValue: 0,
      followingValue: 0,
      id: this.props.id,
    };

    this.following = this.following.bind(this);
    this.unFollow = this.unFollow.bind(this);
    
  } 

  async componentDidMount() {
    const resProfile = await axios.get( "http://54.180.103.146:3000/profile/" + this.state.id, this.userToken);
    this.setState
    ({ 
      viewFeed: resProfile.data.profile.Timelines, 
      userEmail: resProfile.data.profile.email,
      userName: resProfile.data.profile.nickname, 
      userImg: resProfile.data.profile.img,
      followerValue: resProfile.data.profile.Followers.length,
      followingValue: resProfile.data.profile.Followings.length,
    });
  
  }

  userToken = {
    headers: {
      "access-token": 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4YjA1NWE2NTZlMTE1ODg4NDJjNGMyNzBiZjU3Nzg2IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrIiwiaWF0IjoxNTk5MTUwNzAyLCJleHAiOjE1OTkyMzcxMDJ9.Gvoy4TLF-EvtYdNYqrUx1kd7qsWxjehZq1YA9jdmbwQ",
    }
  }


   followToken = {
      headers: {
      "access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4YjA1NWE2NTZlMTE1ODg4NDJjNGMyNzBiZjU3Nzg2IiwiZW1haWwiOiJzZXVuZ2Jpbjk4NTBAZHNtLmhzLmtyIiwibmlja25hbWUiOiJuaWNrIiwiaWF0IjoxNTk4Njg1ODA1LCJleHAiOjE1OTg2ODc2MDV9.xyHmjGffwa3TPChjbaxZw1qUY74HhhIEXHA83TfWkRM"
    }
  }
  

  following() {
    const res = axios.get('http://13.209.47.153:3000/follow/' + this.state.id, this.followToken);
    this.setState({isFollow: true});
  }

  unFollow() {
    const res = axios.delete('http://13.209.47.153:3000/follow/' + this.state.id, this.followToken);
    this.setState({isFollow: false})
  }

  
   
  render() {
    const { viewFeed, userEmail, userName, userImg, followerValue, followingValue}= this.state;
     ;
    return (
      <React.Fragment>
  <div className="profile">
  <div className="otherProfile"></div>
  { this.state.isFollow ? (
    <button className="following" onClick={this.unFollow}>팔로잉</button>
           ) : (
            <button className="following" onClick={this.following}>팔로우</button>
        )}
          <span id="otherId">{userName}</span>
           <span id="otherEmail">{userEmail}</span>
        <div className="followers">
        <span>{followerValue} 팔로워</span>
        <span>{followingValue} 팔로잉</span>
        </div>
        </div>

        <div>
          {viewFeed.map((view) => (
            <OtherUserFeed
              id = {view.id}
              key={view.id} 
              user={view.userId}
               email={userEmail}
              content={view.content}
              imges={view.Images}
              nickname={userName}
              isLike={view.isLike}
              userImg={userImg}
            />
          ))}
        </div>

     </React.Fragment>
    );
  }
}
export default Follow;
