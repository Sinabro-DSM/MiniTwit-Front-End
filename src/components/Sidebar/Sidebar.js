
import React, { useState } from "react";
import "./../../assets/style/sidebar/sidebar.css";
import "./../../assets/style/main/index.css";
import { profile, threeDot } from "../../assets/img";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const Sidebar = () => {
  const [showing, setShowing] = useState(false);
  const onClickMoreButton = () => setShowing(!showing);
  const onLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  if (!showing) {
    return (
      <div className="mainContainer">
        <aside className="sidebar">
          <Link to="/timeLine"><div className="twitIcon"></div></Link>
          <article className="sideBarIconContainer">
            <div>
              <img src={profile}></img>

           <Link to="/users" style={{textDecoration : "none"}}> <h3>프로필</h3> </Link>
            </div>
            <div onClick={onClickMoreButton}>
              <img src={threeDot}></img>
              <h3>더보기</h3>
            </div>
          </article>
        </aside>
      </div>
    );
  } else {
    return (
      <div className="mainContainer">
        <aside className="sidebar">
          <div className="twitIcon"></div>
          <article className="sideBarIconContainer">
            <div>
              <img src={profile}></img>
              <h3>프로필</h3>
            </div>
            <div className="moreBox" onClick={onClickMoreButton}>
              <img src={threeDot}></img>
              <h3>더보기</h3>
              <Link to="/"><button className="logoutButton" onClick={onLogout}>로그아웃</button></Link>
            </div>
          </article>
        </aside>
      </div>
    );
  }
};

export default Sidebar;
