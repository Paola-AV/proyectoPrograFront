import { useEffect, useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Formulario from "./Formulario";
import { useNavigate } from "react-router-dom";
import { Gmail } from "./Gmail";
//componente para la vista de clientes desde trabajador
export function ClientesT() {
    /*esta constante hace uso de la funcion Navigate para usarla en eventos onClick y visualizar nuevos componentes*/
    const navigate = useNavigate()
    //variables para el get
    const [cliente, setCliente] = useState([]);
    const [interesado, setInteresado] = useState([]);
    //variables para las funciones toggle
    const [showDiv, setShowDiv] = useState(false);
    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);


    //dos funciones que permiten mostrar un div solo cuando "showDiv" y "showDiv1" son true, que pasa al tocar el boton
    const toggleDiv1 = () => {
        setShowDiv1(!showDiv1);
    };

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    const toggleDiv2 = () => {
        setShowDiv2(!showDiv2);
    };


    //fetchs de la api con el metodo get para mostrar informacion
    useEffect(() => {
        fetch('http://localhost:8000/cliente',

        )
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


    return (
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
                        <table className="interesadoTable" >
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
                                    <th><select >
                                        <option >Listo</option>
                                        <option >Pendiente</option>
                                    </select>
                                    </th>
                                    <th className="btnMensajeTh">
                                        <a className="btnMensaje" type="submit" onClick={toggleDiv2}>enviar mensaje</a>
                                    </th>
                                </tr>
                            ))}

                        </table>
                        {showDiv2 && <Gmail gmail={interesado.gmail} />}
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
