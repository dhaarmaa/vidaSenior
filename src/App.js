//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css'
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from '../src/views/home'
//import RegisterAndLogin from '../src/views/registerAndLogin';
//import Login from '../src/views/login';
//import Register from '../src/views/register';
//import Post from '../src/views/post';
//import Profile from '../src/views/profile';
//import fire from './firebase/configFIrebase';


/*class  App extends Component{
//constructor
constructor(props){
  super(props);
  this.state= ({
    user: null,
  });
  this.authListener = this.authListener.bind(this);
}

componentDidMount(){
  this.authListener();
}

//función oyente  
authListener(){
  fire.auth().onAuthStateChanged((user) => {
    //console.log(user);
    if(user) {
      this.setState('user', user.uid);
      //localStorage.setItem('user', user.uid);
    } else {
        this.setState({user: null });
        //localStorage.removeItem('user');
    }
  });
}

  render(){
    return (
      <div className="App">
    { this.state.user ? (<Post />) : (<Login/> )}
        {<Router>
          <Switch>
            <Route exact path="/" component={ Login }/>
            <Route path="/home" component={ Home } component={ Home }/>
            <Route path="/registerandlogin" component={ RegisterAndLogin }/>
            <Route path="/login" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/post" component={ Post }/>
            <Route path="/profile" component={ Profile }/>
          </Switch>
        </Router> }
      </div>
    );
    }
}

export default App;*/


import React, { Component } from 'react';
import './App.css';
import fire from './firebase/configFIrebase';
import Home from '../src/views/home';
import Login from '../src/views/login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
          this.setState({ user: null });
          //localStorage.removeItem('user');
        }
    });
  }
  render() {
    return (
      <div>
        { this.state.user ?  ( <Home/>) : (<Login />)}
      </div>
    )
  }
}
export default App;
