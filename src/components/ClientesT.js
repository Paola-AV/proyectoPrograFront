import { useEffect, useState } from "react";
import TablaDatos from "./TablaDatos";
import Formulario from "./Formulario";

export function ClientesT(){
    const [cliente, setCliente] = useState([]);

    const [interesado, setInteresado] = useState([]);

    const [showDiv, setShowDiv] = useState(false);

    const [showDiv1, setShowDiv1] = useState(false);

    const toggleDiv1 = () => {
        setShowDiv1(!showDiv1);
      };

    const toggleDiv = () => {
        setShowDiv(!showDiv);
      };

    useEffect(() => {
       fetch('http://localhost:8000/cliente')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setCliente(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    useEffect(() => {
        fetch('http://localhost:8000/interesado')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setInteresado(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    const [datos, setDatos] = useState([]);

    const agregarDatos = (nuevoDato) => {
      setDatos([...datos, nuevoDato]);
    };
  
    
    
    return(
        <>
            <section className="clienteSec">
                <h1 className="tittleCliente">Clientes</h1>
                <div className="btnCliente">
                    <button className="btnC" onClick={toggleDiv1}>Clientes interesados</button>
                    <button className="btnC" onClick={toggleDiv} >Clientes arrendatarios</button>
                </div>
            </section>

            {/*este div muestra los clientes interesados llamando el componente de tablaDatos*/}
            {showDiv1 && <div className="posts-container">
                        <>
                            <div className="interesadoDiv">
                                <table className="interesadoTable">
                                    <thead className="tableHeader">
                                        <tr className="tableRow">
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Telefono</th>
                                            <th>Gmail</th>
                                            <th>mensaje</th>
                                            <th>Estado</th>
                                            <th>Envio</th>
                                        </tr>
                                    </thead>
                                    {interesado.map(interesado => (
                                        <tr className="tableRow" key={interesado.id}>
                                        <th>{interesado.nombre}</th>
                                        <th>{interesado.apellido}</th>
                                        <th>{interesado.telefono}</th>
                                        <th>{interesado.gmail}</th>
                                        <th>{interesado.mensaje}</th>
                                        <th><select>
                                                <option>Listo</option>
                                                <option>Pendiente</option>
                                            </select>
                                            </th>
                                            <th className="btnMensajeTh">
                                                <a className="btnMensaje">enviar mensaje</a>
                                            </th>
                                    </tr>
                                    ))}
                                    
                                </table>
                            </div>
                        </>
            </div>}
            
            {/*este div muestra los clientes en la base de datos, los arrendatarios*/}
            {showDiv && <div className="posts-container">
                {cliente.map((cliente) => {
                    return (
                        <>
                            <div className="interesadoDiv">
                                <table className="interesadoTable">
                                    <thead className="tableHeader">
                                        <tr className="tableRow">
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Telefono</th>
                                            <th>Gmail</th>
                                        </tr>
                                    </thead>
                                    <tr className="tableRow" key={cliente.id}>
                                        <th>{cliente.nombre}</th>
                                        <th>{cliente.apellido}</th>
                                        <th>{cliente.telefono}</th>
                                        <th>{cliente.gmail}</th>

                                    </tr>
                                </table>
                            </div>
                        </>
                    );
                })}
            </div>}

        </>
    );
}

/* <section className="clienteSec">
            <h1 className="tittleCliente">Clientes</h1>
            <div className="btnCliente">
                    <button className="btnC">Clientes interesados</button>
                    <button className="btnC">Clientes arrendatarios</button>
            </div>
            <div>
                </div>
                <div className="interesadoDiv">
                    <table className="interesadoTable">
                        <thead className="tableHeader">
                            <tr className="tableRow">
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Gmail</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tr className="tableRow">
                            <th>xx</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <th>mensaje</th>
                                        <th><select>
                                            <option>Listo</option>
                                            <option>Pendiente</option>
                                        </select>
                                        </th>
                                        <th className="btnMensajeTh"><a className="btnMensaje">enviar mensaje</a></th>
                    </table>
                </div>
            </section>
        )*/