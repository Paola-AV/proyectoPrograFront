import React, { useRef, useState } from 'react';
//componente que muestra el formulario para nueva direccion aqui se usa ID de la propiedad como parametro
export function NuevaDireccion({ propiedadID }) {
    const [provincia, setProvincia] = useState('');
    const [canton, setCanton] = useState('');
    const [distrito, setDistrito] = useState('');
    const [señales, setSeñales] = useState('');
    const [idpropiedad, setIdpropiedad] = useState('');
    const form = useRef();
    console.log(propiedadID + "****")
    //variable para la funcion toggle
    const [showDiv, setShowDiv] = useState(false);


    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { provincia, distrito, canton, señales, idpropiedad };
        //post para la api de spring
        fetch('http://localhost:8000/direccion', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(response => response.json())
            .then(data => {
                console.log('Nueva direccion');
            })
            .catch(error => {
                console.error('Error al hacer la solicitud POST:', error);
            });
    }
    return (
        <>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="inputDiv" id="inputDiv">
                    <label className='inputLabel'>Provincia</label>
                    <input className='input' id="input" value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}>
                    </input>
                </div>
                <div className="inputDiv" id="inputDiv">
                    <label className='inputLabel'>Canton</label>
                    <input className='input' id="input" value={canton}
                        onChange={(e) => setCanton(e.target.value)}>
                    </input>
                </div>
                <div className="inputDiv" id="inputDiv">
                    <label className='inputLabel'>Distrito</label>
                    <input className='input' id="input" value={distrito}
                        onChange={(e) => setDistrito(e.target.value)}>
                    </input>
                </div>
                <div className="inputDiv" id="inputDiv">
                    <label className='inputLabel'>Señales</label>
                    <input className='input' id="input" value={señales}
                        onChange={(e) => setSeñales(e.target.value)}>
                    </input>
                </div>
                <div className="inputDiv" id="inputDiv">
                    <label className='inputLabel'>ID propiedad</label>
                    <input className='input' id="input" value={idpropiedad} readOnly
                        onChange={(e) => setIdpropiedad(propiedadID)}>
                    </input>
                </div>
                <button type="submit" className='AplicaBtn' >Guardar</button>
            </form>
            {showDiv && <div className='alert1'>
                <h1 className='alertMessage'>Propiedad guardada!</h1>
            </div>}
        </>
    )
}