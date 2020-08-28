
import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from './components/profile/Search';
import User from "./components/profile/User";
import OtherUser from './components/profile/OtherUser';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
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