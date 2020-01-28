import React from 'react';
import Header from '../components/Header'
import Buttons from '../components/Buttons';

function Register(){
    return(
        <div>
            <Header/>
            <div className="container2">
            <p>Nombre y Apellido</p>
            <input/>
            <p>Correo</p>
            <input/>
            <p>contraseña</p>
            <input  type="password"/>
            <p>También puede registrarse con su correo de google</p>
            <Buttons to="/post" name="Google" btn="commonbtn" linkbtn="linkbtn"/>     
            <div className="btnBN">   
            <Buttons to="/registerandlogin" name="Volver" btn="commonbtn" linkbtn="linkbtn"/>  
            <Buttons to="/post" name="Seguir" btn="commonbtn" linkbtn="linkbtn"/>  
            </div> 
            </div>
        </div>
    )
}

export default Register;