import React, { Component } from "react";
import "../../assets/style/profile/search.css";
import UserList from "../profile/UserList";
import axios from "axios";
import { Link, BrowserRouter as Router} from 'react-router-dom'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: true,
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
      "http://3.34.99.55:3000/profile/search/" + this.state.value
    );
    this.setState({ users: res.data.users });
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
         
        <Router> <Link to="/search"> <button onClick={this.userList}>검색</button></Link></Router>
        </div>
        {search === true && (
          <div>
            {users.map((user) => (
              <UserList
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

export default Search;
