import React,{useState, useEffect,useCallback} from 'react';
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
import MainTimeLine from './components/main/TimeLineView'
import FirstView from './components/firstView/FirstView'
import login from './components/login/Login'
import axios from 'axios'

function App() {
  const baseUrl = useCallback("http://15.164.213.251:3000/")

  const refreshToken = localStorage.getItem("refreshToken");

  const refreshConfig = {
    headers : {'refresh-token' : refreshToken}
  }
  const refresh = () =>
    {
          axios.get(baseUrl + "user/refresh", refreshConfig)
          .then((res) => {
            console.log(res)
            localStorage.setItem('accessToken', res.data.accessToken);
            setTimeout(function() {
              window.location.reload();
            }, 200);
          })
          .catch((error) => {
            console.log(error)
          })
    }
    

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/users" render={() =><User refresh={refresh} baseUrl={baseUrl}/>}/>
          <Route exact path="/search" render={() =><Search refresh={refresh} baseUrl={baseUrl}/>}/>
          <Route path="/otherUser/:id" render={({location, match}) =><OtherUser refresh={refresh} baseUrl={baseUrl} location={location} match={match}/>}/>
          <Route exact path="/" render={props => <FirstView baseUrl={baseUrl}/>}/>
          <Route exact path="/signUp" component={SignUp} baseUrl={baseUrl}/>
          <Route exact path="/signUpCheck" component={SignUpCheck} baseUrl={baseUrl}/>
          <Route exact path="/signUpSuccess" component={SignUpSuccess}/>
          <Route exact path="/timeLine" render={() => (<MainTimeLine refresh={refresh} baseUrl={baseUrl}/>)}/>
          <Route exact path="/login" component={login} baseUrl={baseUrl}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;