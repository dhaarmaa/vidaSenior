import React, { Component } from 'react';
import logo from '../img/logo.png';


class Header extends Component{
    render(){
        return(
        <div className="header">
                <div>
                    <img src={ logo} className="logoheader"/>
                </div>
                <div className="foont">
                <h1>VidaSenioor</h1>
                </div>
            </div>
        )
    }
}

export default Header;