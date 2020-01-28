import React, { Component } from 'react';
//import { Table, Button, Row, Col, InputGroup, Input, Fade } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Buttons extends Component {
    render() {
        return (
    <div>
    <button  className={ this.props.btn} ><Link to={ this.props.to } className={ this.props.linkbtn}>{this.props.name}</Link></button>

    </div>
        )
    }
}

export default Buttons;
