import React from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';

function RegisterAndLogin(){
    return(
        <div className="">
            <Header/>
            <div className="">
            <div>
                <Buttons to="/login" name="Iniciar Sesión" btn="commonbtn" linkbtn="linkbtn"/>   
            </div>
            <div className="or">
                <p>o</p>
            </div>
            <div>
                <Buttons to="/register" name="Registrase" btn="commonbtn" linkbtn="linkbtn"/>  
            </div>
            </div>
        </div>
    )
}

export default RegisterAndLogin;