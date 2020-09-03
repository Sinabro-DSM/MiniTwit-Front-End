import React from 'react';
import SignUp from './components/signUp/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUpCheck from './components/signUp/SignUpCheck';
import SignUpSuccess from './components/signUp/SignUpSuccess';


import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from './components/profile/Search';
import User from "./components/profile/User";
import OtherUser from './components/profile/OtherUser';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Router>
        
        <Switch>
         <Route  path="/users" component={User}/>
          <Route exact path="/search" component={Search}/>
          <Route path="/otherProfile" component={OtherUser}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;