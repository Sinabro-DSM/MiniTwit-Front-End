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
      isFollow: null,
      followerValue: 0,
      followingValue: 0,
      id: this.props.id,
    };

    this.following = this.following.bind(this);
    this.unFollow = this.unFollow.bind(this);
    
  } 

  async componentDidMount() {
    const resProfile = await axios.get(this.props.baseUrl + 'profile/' + this.state.id, this.userToken);
    this.setState
    ({ 
      viewFeed: resProfile.data.profile.Timelines, 
      userEmail: resProfile.data.profile.email,
      userName: resProfile.data.profile.nickname, 
      userImg: resProfile.data.profile.img,
      followerValue: resProfile.data.profile.Followers.length,
      followingValue: resProfile.data.profile.Followings.length,
      isFollow: resProfile.data.isFollow,
    });
  }
  token = localStorage.getItem('accessToken');
  userToken = {
    headers: {
      "access-token": 
        this.token,
       }
  }


   followToken = {
      headers: {
      "access-token":
      this.token
    }
  }
  

  following() {
    const res = axios.get(this.props.baseUrl + 'follow/' + this.state.id, this.followToken);
    this.setState({isFollow: true});
  }

  unFollow() {
    const res = axios.delete(this.props.baseUrl + 'follow/' + this.state.id, this.followToken);
    this.setState({isFollow: false})
  }

  
   
  render() {
    const { viewFeed, userEmail, userName, userImg, followerValue, followingValue}= this.state;
     
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
              baseUrl={this.props.baseUrl}
            />
          ))}
        </div>

     </React.Fragment>
    );
  }
}
export default Follow;
