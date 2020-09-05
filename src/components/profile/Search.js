import React, { Component } from "react";
import "../../assets/style/profile/search.css";
import UserList from "../profile/UserList";
import Sidebar from '../Sidebar/Sidebar'
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
  
  userList() {
    const res = axios.get(
      this.props.baseUrl + this.state.value
    )
    .then((res) => {
      this.setState({ users: res.data.users });
    })
    .catch((error) => {
      console.log(error);
      if(error.response.status === 403)
      {
        this.props.refresh();
      }
    })
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
                baseUrl={this.props.baseUrl}
              />
            ))}
          </div>
          
        )}
      </React.Fragment>
    );
  }
}

export default Search;
