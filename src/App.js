import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from './components/profile/Search';
import User from "./components/profile/User";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <Sidebar/>
      <Router>
        
        <Switch>
          
        <Route path="/" component={Header}/>     
        <Route exact path="/users" component={User}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
