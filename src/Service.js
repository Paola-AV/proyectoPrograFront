import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

/*export const Auth = async () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const blog = {nombreUsuario, contraseña};

  const handleLogin = await fetch('http://localhost:8000/usuario/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(blog)
  }).then(() => {
    console.log('sesion iniciada');
  })

    const usuario = await handleLogin.json()

    if (usuario.tipo != undefined) {
        sessionStorage.setItem('usuario', usuario.tipo);
        return "Auntenticado"
    } else {
        return "Error"
    }
}

export const permitirInfo = async () => {
    const userType = sessionStorage.getItem('usuario', usuario.tipo)

    if (userType === 1 || userType === 2) {
        Navigate("/Inicio");
      } else if (userType === 3) {
        Navigate("/Home");
      }
}

*/