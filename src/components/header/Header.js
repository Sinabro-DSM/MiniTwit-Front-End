
import React, { Component } from "react";
import "../../assets/style/header/header.css";
import Search from "../profile/Search";
import axios from "axios";

class Header extends Component {
 
  render() {
   
    return (
      <React.Fragment>
        <Search/>
      </React.Fragment>
    );
  }
}
export default Header;