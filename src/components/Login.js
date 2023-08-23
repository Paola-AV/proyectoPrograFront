import { json, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Usuario } from "./Usuario";

//componente para login
function Login() {
  //variable para navegar por los componentes de la pagina al pasarle rutas
  const navigate = useNavigate()
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [dato, setDato] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { nombreUsuario, contraseña };
    //post para la api de spring
    fetch('http://localhost:8000/usuario/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(response => response.json())
      .then(data => {
        setDato(data);
        console.log('inicio de sesion exitoso');
        console.log(dato.tipo)
      }).catch(error => {
        console.error('Error al hacer la solicitud POST:', error);
      });
    //un filtro para redirigir a los usuarios
    if (dato == null) {
      navigate('/NuevoUsuario')
    } else if (dato.tipo == "1") {
      navigate("/Inicio")
    } else if (dato.tipo == "2") {
      navigate("/")
    }

  }

  return (
    <section className="loginSec">

      <div className="loginCol1">
        <img id="loginImg" src="casaLog.jpg" />
      </div>
      <div className="loginCol2">
        <h2>Inicio de Sesión</h2>
        <p>Bienvenido al sistema de CasaReal, introduce tu ID y contraseña:</p>

        <div className="inputLogin">
          <label>ID del usuario</label>
          <input type="text" value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)} className="inputLog"></input>
        </div>

        <div className="inputLogin">
          <label>Contraseña</label>
          <input type="password" value={contraseña}
            onChange={(e) => setContraseña(e.target.value)} className="inputLog"></input>
        </div>

        <div>
          <div className="inicioBtn">
            <button onClick={handleSubmit} className="sesionBtn">Inicia sesion</button>
          </div>

          <p className="sesionP">Aun no tienes una cuenta? <a className="sesionA" onClick={() => navigate('/NuevoUsuario')}>Suscribete</a></p>
        </div>

      </div>
    </section>
  )
}

export default Login;
