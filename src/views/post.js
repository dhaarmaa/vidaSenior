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
