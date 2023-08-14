import React from 'react';
import Formulario from './Formulario';
import { useEffect, useState } from "react";

/*function TablaDatos() {
  const [datos, setDatos] = useState(jsonData);
  
  const tableRows = datos.map((info) => {
    return (
      <tr className="tableRow">
        <td className='dataCell'>{info.nombre}</td>
        <td className='dataCell'>{info.apellido}</td>
        <td className='dataCell'>{info.telefono}</td>
        <td className='dataCell'>{info.gmail}</td>
        <td >{info.mensaje}</td>
        <td>
          <select>
            <option>Listo</option>
            <option>Pendiente</option>
          </select>
        </td>
        <td></td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalDatos = datos.length;
    data.id = totalDatos + 1;
    const updatedDatos = [...datos];
    updatedDatos.push(data);
    setDatos(updatedDatos);
  };


  return (
    <section className='tablaDatosSec'>
      <table className='interesadoTable'>
      <thead className='tableHeader'>
        <tr className='tableRow'>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Gmail</th>
          <th>Mensaje</th>
          <th>Estado</th>
          <th>Envio</th>
        </tr>
      </thead>

      <tbody>{tableRows}</tbody>

    </table>
    <Formulario func={addRows} />
    </section>
  );
};

export default TablaDatos;*/
