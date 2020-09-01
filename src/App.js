import React from 'react';
import SignUp from './components/signUp/SignUp'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SignUpCheck from './components/signUp/SignUpCheck';
import SignUpSuccess from './components/signUp/SignUpSuccess';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp}></Route>
        <Route path="/SignUpCheck" component={SignUpCheck}></Route>
        <Route path="/SignUpSuccess" component={SignUpSuccess}></Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
