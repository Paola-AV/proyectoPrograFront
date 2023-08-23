import React, { useRef, useState } from 'react';
//componente para agregar nuevas imagenes
export function NuevaImagen({ IDpropiedad }) {
    const [file, setFile] = useState('');
    const [idpropiedad, setIdpropiedad] = useState('');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('idpropiedad', idpropiedad);
        const blog = { file, idpropiedad };
        //post para la api de spring
        fetch('http://localhost:8000/imagen/imagen/guardar/' + IDpropiedad, {
            method: 'POST',
            body: formData,
        }).then(() => {
            console.log('nueva imagen');
        }).catch(error => {
            console.error('Error al hacer la solicitud POST:', error);
        });
    }


    return (
        <form ref={form} onSubmit={handleSubmit}>
            <h2>Ingresa tus fotos</h2>
            <input type="file" accept='image/*|media_type'
                onChange={(e) => setFile(e.target.files[0])}></input>

            <input className='input' id="input1" value={IDpropiedad} readOnly
                onChange={(e) => setIdpropiedad(e.target.value)}></input>

            <button type="submit" className='AplicaBtn'>Guardar</button>
        </form>
    )
}