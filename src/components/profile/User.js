import React, { Component } from "react";
import "../../assets/style/profile/profile.css";
import ProfileEdit from "./ProfileEdit";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  open = () => {
    this.setState({ modalOpen: true });
  };

  close = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    return (
      <div className="userContainer">
        <div className="background"></div>
        <button className="editBtn" onClick={this.open}>
          프로필 설정하기
        </button>
        <ProfileEdit isOpen={this.state.modalOpen} close={this.close} />
        <div className="profilePicture"></div>
        <div className="profile">
          <p id="id">rin3583</p>
          <p id="email">@user.email.com</p>
          <a>0 팔로워</a>
          <a>0 팔로잉</a>
        </div>
      </div>
    );
  }
}

export default User;
