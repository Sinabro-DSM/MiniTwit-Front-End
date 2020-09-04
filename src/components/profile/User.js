import React, { Component } from "react";
import "../../assets/style/profile/profile.css";
import '../profile/ProfileFeed';
import ProfileEdit from "./ProfileEdit";
import ProfileFeed from "../profile/ProfileFeed";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Header from '../header/Header'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      profileFeed: [],
      profileName: '',
      profileImg: '',
      profileEmail: '',
      follower: 0,
      following: 0,
    };
  }
  token = localStorage.getItem('accessToken')
  config = {
    headers: {
      'access-token': 
        this.token
    }
  }
  async componentDidMount() {
    const res = await axios.get("http://13.209.67.14:3000/profile/", this.config);
    this.setState({ 
      profileFeed: res.data.profile.Timelines,
      profileName: res.data.profile.nickname,
      profileImg: res.data.profile.img,
      profileEmail: res.data.profile.email,
      follower: res.data.profile.Followers.length,
      following: res.data.profile.Followings.length,
    })
  }

  open = () => {
    this.setState({ modalOpen: true });
  };

  close = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    const imgUrl = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
    const { profileFeed, profileName, profileImg, profileEmail, follower, following} = this.state;
    return (
      <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <div className="userContainer">
        <div className="background"></div>
        <button className="editBtn" onClick={this.open}>
          프로필 설정하기
        </button>
        <ProfileEdit isOpen={this.state.modalOpen} close={this.close} />
        <div className="profilePicture" src={imgUrl+profileImg}></div>
        <div className="profile">
          <span id="name">{profileName}</span>
          <span id="email">{profileEmail}</span>
          <div className="follow">
          <span>{follower} 팔로워</span>
          <span>{following} 팔로잉</span>
        </div>
        </div>
        
        <div>
          {profileFeed.map((feed) => (
              <ProfileFeed
              key={feed.id}
              id={feed.id}
              content={feed.content}
              email={profileEmail}
              name={profileName}
              imges={feed.Images}
              isLike={feed.isLike}
              profileImg={profileImg}
              
              />
          ))}
        </div>
        </div>
        </div>
        
    );
  }
}

export default User;