
import React, { Component } from "react";
import "../../assets/style/header/header.css";
import Search from "../profile/Search";
import axios from "axios";

class Header extends Component {
  render() {
   const userName = this.props.name;
    return (
      <React.Fragment>
        <Search name={userName}/>
      </React.Fragment>
    );
  }
}
export default Header;