import React, { useState, useEffect } from 'react';


export default function Connect() {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
     fetch('http://localhost:8000/usuario')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setUsuario(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  return (
    <div className="posts-container">
       {usuario.map((usuario) => {
          return (
             <div className="post-card" key={usuario.nombre}>
                <h2 className="post-title">{usuario.apellido}</h2>
                <p className="post-body">{usuario.contraseña}</p>
             </div>
          );
       })}
    </div>
    );
 };

