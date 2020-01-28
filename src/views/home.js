import React from 'react';
//import Header from "../components/Header";
import Buttons from '../components/Buttons';
import logo from '../img/logo.png';
import '../style.css';

function Home(history){
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
            {/* <button onClick={() => history.push("/registerandlogin")} >Comnezar</button> */}

        </div>
    )
}

export default Home;