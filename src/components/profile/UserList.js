import React  from "react";
import "../../assets/style/profile/userList.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function UserList({ id, nickname, imge }) {
  const imgSrc = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
  const userId = id;
  return (
    <div>
      <Link to={'otherUser/' + userId}>
      <div className="userList" id={id}>
        <div className="profileImg">
        <img src={imgSrc + imge} /></div>
        <a>{nickname}</a>
      </div>
      </Link>
    </div>
  );
}

export default UserList;