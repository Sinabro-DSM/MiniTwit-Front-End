import React  from "react";
import "../../assets/style/profile/userList.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function UserList({ id, nickname, imge }) {
  const imgSrc = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";

  return (
    <div className="searchLayout">
      <Router>
        <Link to="/otherProfile">
      <div className="userList" id={id}>
        <div className="profileImg">
        <img src={imgSrc + imge} /></div>
        <a>{nickname}</a>
      </div>
      </Link>
      </Router>
    </div>
  );
}

export default UserList;