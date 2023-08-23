import { BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Direccion } from "./Direccion";
import React from "react";
import { ImgCasaID } from "./ImgCasaID";
import { HouseId } from "./HouseId";
import { useNavigate } from "react-router-dom";

//componente que muestra las diferentes propiedades

export function Houses() {

    //variables para el filtro

    const [precioFiltro, setPrecioFiltro] = useState("40000");
    const [tipoFiltro, setTipoFiltro] = useState("1");
    //para navegar por la pagina
    const navigate = useNavigate()
    //variable y funcion que muestra componentes segun showDiv sea true
    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };
    //fetch de la api
    const [propiedad, setPropiedad] = useState([]);
    const [imagen, setImagen] = useState([]);
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


    //aqui se agregan los datos tomados en un array (propertyElements) y tambien se llama los componentes de casa y direccion
    const propertyElements = propiedad.map((propiedad, index) => {
        if (propiedad.precio >= precioFiltro) return
        if (propiedad.tipo == tipoFiltro) {
            return (<div key={propiedad.id} className="propiedadesDiv">
                <h3 className="casaTitulo">{propiedad.nombre}</h3>
                <ImgCasaID propiedadID={propiedad.idpropiedad} />
                {showDiv && <HouseId propiedadID={propiedad.idpropiedad} />}
                <div><h3 className="casaDetalle"><Direccion propiedadID={propiedad.idpropiedad}></Direccion></h3></div>
                <div><h3 className="casaDetalle">Cuartos: {propiedad.cuartos}  Baños: {propiedad.banos} </h3></div>
                <div><h3 className="casaDetalle">₡{propiedad.precio}.000</h3></div>
                <button className="BtnCasa" onClick={() => navigate('/casaID/' + propiedad.idpropiedad)}>Ver mas</button>
            </div>)
        }

    });

    return (
        <section className="propiedadesSec">
            <div className="filtroContainer">
                <ul className="filtroUl">
                    <li className="filtroItem">
                        Tipo de propiedad
                        <select className="filtroSelect" onChange={(e) => setTipoFiltro(e.target.value)}>
                            <option value={"1"}>Alquiler</option>
                            <option value={"2"}>Venta</option>
                        </select>
                    </li>
                    <li className="filtroItem">
                        Precio
                        <select className="filtroSelect" onChange={(e) => setPrecioFiltro(e.target.value)}>
                            <option value={200}>menor a 200.000</option>
                            <option value={300}>menor a 300.000</option>
                            <option value={400}>menor a 400.000</option>
                            <option value={900}>400.000-900.000</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="propiedadesContainer">
                {propertyElements}
            </div>
        </section>
    )
}

export default Houses;
