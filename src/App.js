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
import MainTimeLine from './components/main/MainTimeLine'
import firstView from './components/firstView/FirstView'
import login from './components/login/Login'

function App() {
  return (
    <div>

      {/* <Sidebar/>
      <Header/> */}
      <Router>
        
        <Switch>
          <Route path="/users" component={User}/>
          <Route exact path="/search" component={Search}/>
          <Route path="/otherUser/:id" component={OtherUser}/>
          <Route exact path="/" component={firstView}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/signUpCheck" component={SignUpCheck}/>
          <Route exact path="/signUpSuccess" component={SignUpSuccess}/>
          <Route exact path="/timeLine" component={MainTimeLine} />
          <Route exact path="/login" component={login}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;