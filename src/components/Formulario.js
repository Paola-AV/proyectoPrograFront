import React, { useState } from 'react';

function Formulario (props) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [gmail, setGmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { nombre, apellido, telefono, gmail, mensaje };

    fetch('http://localhost:8000/interesado', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('nuevo cliente interesado');
    })
  }
  return (
    <><section className='formSec'>
      <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
          <label className='inputLabel'>Nombre</label>
          <input className='input' type="text" value={nombre}
          onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Apellido</label>
          <input className='input' type="text" value={apellido}
          onChange={(e) => setApellido(e.target.value)}/>
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Telefono</label>
          <input className='input' type="text" value={telefono}
          onChange={(e) => setTelefono(e.target.value)}/>
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Gmail</label>
          <input className='input' type="gmail" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" value={gmail}
          onChange={(e) => setGmail(e.target.value)}/>
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Mensaje</label>
          <textarea className='input' type="text" value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>

        <button className='inputBtn' type="submit">Enviar</button>
      </form>
    </section></>
  );
};

export default Formulario;
