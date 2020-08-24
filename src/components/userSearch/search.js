import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../../assets/style/profile/search.css";

function Search({ nickname, imge }) {
  const imgSrc = "https://minitwit-sinabro.s3.ap-northeast-2.amazonaws.com/";
  return (
    <div className="searchLayout">
      <div className="userList">
        <img src={imgSrc + imge} />
        <h2>{nickname}</h2>
      </div>
    </div>
  );
}

export default Search;
