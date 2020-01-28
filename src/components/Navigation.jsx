import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navigation extends Component{
    render (){
        return(
            
                <nav>
                    <Link to="/post" className="Navigation-link">{this.props.post}</Link>
                    <Link to="/profile" className="Navigation-link">{this.props.profile}</Link>
                    <Link to="/home" className="Navigation-link">{this.props.home}</Link>
                </nav>
            
        )
    }
}

export  default Navigation;