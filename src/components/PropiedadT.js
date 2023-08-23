import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Direccion } from "./Direccion";
//componente para mostrar propiedades en la vista de trabajador
export function PropiedadT() {
    //variable para navegar por la pagina al pasarle rutas, la variable se llama en botones con la funcion onClick
    const navigate = useNavigate()
    const [propiedad, setPropiedad] = useState([]);
    const [direccion, setDireccion] = useState([]);

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
    const propertyElements = propiedad.map((propiedad, index) => (
        <tr className="tableRowPropiedad" key={propiedad.id}>
            <th>{propiedad.idpropiedad}</th>
            <th>{propiedad.nombre}</th>
            <th>{propiedad.cuartos}</th>
            <th>{propiedad.banos}</th>
            <th>{propiedad.tipo}</th>
            <th>{propiedad.precio}</th>
            <th>{propiedad.fecha_pago}</th>
            <th>{propiedad.descripcion}</th>
            <th><Direccion propiedadID={propiedad.idpropiedad} /></th>
        </tr>
    ));

    return (
        <section className="PropiedadTSec">
            <div className="PropiedadesTable">
                <h1 className="PropiedadTTittle">Propiedades</h1>
                <table className="PropiedadTable">
                    <thead className="tableHeaderPropiedad">
                        <tr className="tableRowPropiedad">
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cuartos</th>
                            <th>Baños</th>
                            <th>Tipo de propiedad</th>
                            <th>Precio</th>
                            <th>Fecha de pago</th>
                            <th>Descripcion</th>
                            <th>Direccion</th>
                        </tr>
                    </thead>
                    {propertyElements}


                </table>
            </div>
            <div className="BtnDiv">
                <button className="AplicaBtn" id="btnPropiedad" onClick={() => navigate('/NuevaPropiedad')}>Nueva Propiedad</button>
            </div>

        </section>
    )
}