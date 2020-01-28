import React from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';

function Login(history){
    return(
        <div>
            <Header/>
            <div className="container2">
            <p>Correo</p>
            <input/>
            <p>contraseña</p>
            <input  type="password"/>
            <p>También puedes ingresar con su correo de google</p>
            <Buttons to="/post" name="Google" btn="commonbtn" linkbtn="linkbtn"/>     
            <div className="btnBN">   
            <Buttons to="/registerandlogin" name="Volver" btn="commonbtn" linkbtn="linkbtn"/>  
            <Buttons to="/post" name="Seguir" btn="commonbtn" linkbtn="linkbtn"/>  
            </div> 
            </div>   
        </div>
    )
}

export default Login;