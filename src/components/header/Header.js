import React, { Component } from "react";
import "../../assets/style/header/header.css";
import Search from "../userSearch/Search";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      value: "",
      users: [],
    };

    this.onChange = this.onChange.bind(this);
    this.userList = this.userList.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  async userList() {
    const res = await axios.get(
      "http://3.34.198.6:3000/profile/search/" + this.state.value
    );
    console.log(res);
    this.setState({ users: res.data.users, search: true });
  }

  render() {
    const { users, search } = this.state;
    console.log(users);
    return (
      <React.Fragment>
        <div className="side">
          <p>rin3583</p>
          <input
            type="text"
            placeholder="친구를 찾아보세요"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button onClick={this.userList}>검색</button>
        </div>
        {search === true && (
          <div>
            {users.map((user) => (
              <Search
                key={user.id}
                id={user.id}
                nickname={user.nickname}
                imge={user.img}
              />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Header;
