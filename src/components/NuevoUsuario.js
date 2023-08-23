import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Perfil } from "./Perfil";
//componente con el formulario para el nuevo usuario
export function NuevoUsuario() {
  const navigate = useNavigate()
  //variables para el metodo post
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [tipo, setTipo] = useState('2');
  const [showDiv, setShowDiv] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const num = "2";
  const toggleDiv = () => {
    setShowDiv1(!showDiv1);
  };

  //fetch de la api
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { nombre, apellido, nombreUsuario, contraseña, tipo };

    fetch('http://localhost:8000/usuario', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('nuevo usuario');
      toggleDiv();
    })
  }
  return (
    <><section className='formSecUs'>
      <section className="nuevoSec1">
        <img id="loginImg1" src="nuevoUs.jpg"></img>
        <h1 className="tittleUs">Crea tu usuario</h1>
      </section>
      <section className="nuevoSec2">

        <form className="nuevoUs" onSubmit={handleSubmit}>
          <div className='inputDiv'>
            <label className='inputLabel'>Nombre</label>
            <input className='input' type="text" value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className='inputDiv'>
            <label className='inputLabel'>Apellido</label>
            <input className='input' type="text" value={apellido}
              onChange={(e) => setApellido(e.target.value)} />
          </div>

          <div className='inputDiv'>
            <label className='inputLabel'>Nombre de usuario</label>
            <input className='input' type="text" value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)} />
          </div>
          <div className='inputDiv'>
            <label className='inputLabel'>Contraseña</label>
            <input className='input' type="text" value={contraseña}
              onChange={(e) => setContraseña(e.target.value)} />
          </div>
          <div className='inputDiv'>
            <label className='inputLabel'>Tipo</label>
            <input className='input' type="text" value={tipo} readOnly
              onChange={(e) => setTipo("2")} />
          </div>

          <button className='inputBtnUs' type="submit">Enviar</button>

        </form>
        {showDiv1 && <button className='inputBtnUs' onClick={navigate("/login")}> Ir al login</button>}
      </section>

    </section></>
  )
}