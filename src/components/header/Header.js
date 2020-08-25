import React from "react";
import "../../assets/style/header/header.css";

function Header() {
  return (
    <div className="side">
      <p>rin3583</p>
      <input type="text" placeholder="친구를 찾아보세요" />
      <button>검색</button>
    </div>
  );
}

export default Header;
