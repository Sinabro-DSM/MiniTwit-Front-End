import React  from "react";
import "../../assets/style/profile/userList.css";

function UserList({ id, nickname, imge }) {
  const imgSrc = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";

  return (
    <div className="searchLayout">
      <div className="userList">
        <div className="profileImg">
        <img src={imgSrc + imge} /></div>
        <a>{nickname}</a>
      </div>
    </div>
  );
}

export default UserList;
