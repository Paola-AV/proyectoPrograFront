import { BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Direccion } from "./Direccion";
import axios from 'axios';

export function Houses() {
    const [propiedad, setPropiedad] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/propiedad')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPropiedad(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const [direccion, setDireccion] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/direccion')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDireccion(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <section className="propiedadesSec">
            <div className="filtroContainer">
                <ul className="filtroUl">
                    <li className="filtroItem">
                        Provincia
                        <select className="filtroSelect">
                            <option>Alajuela</option>
                            <option>Heredia</option>
                        </select>
                    </li>
                    <li className="filtroItem">
                        Tipo de propiedad
                        <select className="filtroSelect">
                            <option>Casa</option>
                            <option>Apartamento</option>
                        </select>
                    </li>
                    <li className="filtroItem">
                        Precio
                        <select className="filtroSelect">
                            <option>menor a 200.000</option>
                            <option>entre 200.000-300.000</option>
                            <option>entre 300.000-400.000</option>
                            <option>mayor a 400.000</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="propiedadesContainer">
                {propiedad.map(propiedad => (
                    <div key={propiedad.id} className="propiedadesDiv">
                        <img src="casa1.jpg" className="casaImg"></img>
                        <h3 className="casaTitulo">{propiedad.nombre}</h3>
                        <div><h3 className="casaDetalle">Alajuela, Palmares</h3></div>
                        <div><h3 className="casaDetalle">Cuartos: {propiedad.cuartos}  Baños: {propiedad.banos} </h3></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Houses;

/*
***

              {propiedad.map(propiedad => (
                    <div key={propiedad.id} className="propiedadesDiv">
                        <img src="casa1.jpg" className="casaImg"></img>
                        <h3 className="casaTitulo">{propiedad.nombre}</h3>
                        <div><h3 className="casaDetalle">Alajuela, Palmares</h3></div>
                        <div><h3 className="casaDetalle">Cuartos: {propiedad.cuartos}  Baños: {propiedad.banos} </h3></div>
                    </div>
                ))}
**********




return(
                    <>
                    <div key={propiedad.id}  className="propiedadesDiv">  
                    <h3>{propiedad.nombre}</h3>
                    <div><h3>Cuartos: {propiedad.cuartos}  Baños: {propiedad.banos} </h3></div>
                    </div>
                    </> 



                    useEffect(() => {
        fetch('http://localhost:8000/propiedad')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPropiedad(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const [direccion, setDireccion] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/direccion')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDireccion(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
                )*/