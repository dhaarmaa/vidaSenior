//import React from 'react';
//import Header from "../components/Header";
//import Buttons from '../components/Buttons';
//import logo from '../img/logo.png';
//import '../style.css';

/*function Home(history){
    return(
        <div className="container">
            <div>
            <img src= { logo } className="logoimg"/>
            </div>
            <div>
            <h1>VidaSenior</h1>
            </div>
            <div>
            <Buttons to="/registerandlogin" name="Comenzar" btn="commonbtn" linkbtn="linkbtn"/>
            </div>
        </div>
    )
}

export default Home;*/

import React, { Component } from 'react';
import fire from '../firebase/configFIrebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>

                <button>Logout</button>Logout
            </div>
           
               
   

);

    }

}

export default Home;
