import React, { useRef, useState } from 'react';
import { NuevaImagen } from './NuevaImagen';
import { NuevaDireccion } from './NuevaDireccion';
//componente con el formulario para agregar propiedades nuevas
export function NuevaPropiedad() {
    //variables para el post
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipo, setTipo] = useState('');
    const [cuartos, setCuartos] = useState('');
    const [banos, setBanos] = useState('');
    const [fecha_pago, setFecha_pago] = useState('');
    const [nombre, setNombre] = useState('');
    const [nuevoId, setNuevoId] = useState('');
    const form = useRef();
    //funcion para mostrar componentes en evento onClick
    const [showDiv, setShowDiv] = useState(false);
    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { descripcion, precio, tipo, cuartos, banos, fecha_pago, nombre };
        //post para la api de spring
        fetch('http://localhost:8000/propiedad', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(response => response.json())
            .then(data => {
                setNuevoId(data);
                console.log('Nuevo ID de propiedad:', nuevoId);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud POST:', error);
            });
    }
    return (
        <section className="NuevaPropiedadSec">
            <h1 className="PropiedadTTittle">Nueva Propiedad</h1>
            <form className="FormDiv1" ref={form} onSubmit={handleSubmit}>
                <div className="FormDiv">
                    <div className="Form">
                        <div className="inputDiv" id="inputDiv">
                            <label className='inputLabel'>Titulo</label>
                            <input className='input' id="input" value={nombre}
                                onChange={(e) => setNombre(e.target.value)}></input>
                        </div>
                        <div className="inputDiv" id="inputDiv">
                            <label className='inputLabel'>Descripcion</label>
                            <input className='input' id="input" value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}></input>
                        </div>
                        <div className="inputDiv" id="inputDiv">
                            <label className='inputLabel'>Cuartos</label>
                            <input className='input' id="input" value={cuartos}
                                onChange={(e) => setCuartos(e.target.value)}></input>
                        </div>
                        <div className="inputDiv" id="inputDiv">
                            <label className='inputLabel'>Baños</label>
                            <input className='input' id="input" value={banos}
                                onChange={(e) => setBanos(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="Form">

                        <div className="inputDiv" id="inputDiv">
                            <label className='inputLabel'>Tipo de propiedad</label>
                            <select className="filtroSelectPropiedad"
                                onChange={(e) => setTipo(e.target.value)}>
                                <option value={"1"}>Alquiler</option>
                                <option value={"2"}>Venta</option>
                            </select>
                        </div>
                        <div className="inputDiv" id="inputDiv">
                            <label className='inputLabel'>Precio</label>
                            <input className='input' id="input" value={precio}
                                onChange={(e) => setPrecio(e.target.value)}></input>
                        </div>
                        <div className="inputDiv" id="inputDiv">
                            <label className='inputLabel'>Fecha de pago</label>
                            <input className='input' id="input" value={fecha_pago}
                                onChange={(e) => setFecha_pago(e.target.value)}></input>
                        </div>
                    </div>
                </div>

                <button type="submit" className='AplicaBtn' onClick={toggleDiv}>Guardar</button>
            </form>

            {showDiv && <><NuevaImagen IDpropiedad={nuevoId} /><NuevaDireccion propiedadID={nuevoId} /></>
            }


        </section>
    )
}