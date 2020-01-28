import React from 'react';
//import logo from './logo.svg';
//import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/views/home'
import RegisterAndLogin from '../src/views/registerAndLogin';
import Login from '../src/views/login';
import Register from '../src/views/register';
import Post from '../src/views/post';
import Profile from '../src/views/profile';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/home" component={ Home }/>
          <Route path="/registerandlogin" component={ RegisterAndLogin }/>
          <Route path="/login" component={ Login }/>
          <Route path="/register" component={ Register }/>
          <Route path="/post" component={ Post }/>
          <Route path="/profile" component={ Profile }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
