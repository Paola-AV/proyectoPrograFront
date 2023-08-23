import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Formulario(props) {
  //variables para los post
  const form = useRef();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [gmail, setGmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  //variable para la funcion toggle
  const [showDiv, setShowDiv] = useState(false);


  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  //funcion de post primero para la api de mailjs y luego para la api de Spring boot
  //la api mailjs permite que lleguen emails automaticamente esta seteado para el email vargasp437@gmail.com
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lt44xoq', 'template_2glpfyh', form.current, '3mo8GyLQk3lktda3v')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    const blog = { nombre, apellido, telefono, gmail, mensaje };
    //post para la api de spring
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
      <form ref={form} onSubmit={handleSubmit}>
        <div className='inputDiv'>
          <label className='inputLabel'>Nombre</label>
          <input className='input' type="text" name='nombre' value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Apellido</label>
          <input className='input' type="text" name='apellido' value={apellido}
            onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Telefono</label>
          <input className='input' type="text" name='telefono' value={telefono}
            onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Gmail</label>
          <input className='input' type="gmail" name='gmail' pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" value={gmail}
            onChange={(e) => setGmail(e.target.value)} />
        </div>

        <div className='inputDiv'>
          <label className='inputLabel'>Mensaje</label>
          <textarea className='input' type="text" name='mensaje' value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>

        <button className='inputBtn' type="submit" value="Send" onClick={toggleDiv}>Enviar</button>

      </form>
      {showDiv && <div className='alert'>
        <h1 className='alertMessage'>Mensaje enviado! pronto te contactaremos</h1>
      </div>}
    </section></>
  );
};

export default Formulario;
