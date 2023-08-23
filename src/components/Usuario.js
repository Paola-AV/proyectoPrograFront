import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//componente para ver la informacion del usuario
export function Usuario() {
    //variable para funcion toggle
    const [showDiv, setShowDiv] = useState(false);
    const [showDiv1, setShowDiv1] = useState(false);
    //variable para get
    const [usuario, setUsuario] = useState([]);
    //variables para el put
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [tipo, setTipo] = useState('');

    //funcion para mostrar div de actualizacion del usuario
    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };
    const toggleDiv1 = () => {
        setShowDiv1(!showDiv1);
    };
    //fetch de la api
    useEffect(() => {
        fetch('http://localhost:8000/usuario/9')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsuario(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    //fetch con request put
    const handleUpdate = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:8000/usuario/IDusuario/9';
        const usuarioActualizado = { nombre, apellido, contraseña, nombreUsuario, tipo };

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioActualizado),
            });

            if (response.ok) {
                console.log('Usuario actualizado con éxito');
            } else {
                console.error('Error al actualizar el usuario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };
    return (
        <section className="usuarioSec">
            <div className="usuarioDiv">
                <div>
                    <img className="usuarioImg" src="agent.jpg" />
                </div>
                <div className="infoUsuario">
                    <h2 className="usuarioH">Bienvenido a tu portal de trabajador!</h2>
                    <h2 className="usuarioH">{usuario.nombre} {usuario.apellido}</h2>
                    <button onClick={toggleDiv} className="sesionBtn1" >Editar informacion</button>
                </div>
            </div>

            {showDiv && <div className="actualizarDiv">
                <h3 className="actualizarH">Actualiza tu informacion</h3>
                <form onSubmit={handleUpdate}>
                    <div className='inputDiv'>
                        <label className='inputLabel'>Nombre</label>
                        <input className='input' type="text" value={usuario.nombre} readOnly
                            onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className='inputDiv'>
                        <label className='inputLabel'>Apellido</label>
                        <input className='input' type="text" value={usuario.apellido} readOnly
                            onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className='inputDiv'>
                        <label className='inputLabel'>Nombre de usuario</label>
                        <input className='input' type="text" value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)} />
                    </div>
                    <div className='inputDiv'>
                        <label className='inputLabel'>Contraseña</label>
                        <input className='input' type="text" value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)} />
                    </div>
                    <div className='inputDiv'>
                        <label className='inputLabel'>Tipo</label>
                        <input className='input' type="text" value={1} readOnly
                            onChange={(e) => setTipo(e.target.value)} />
                    </div>

                    <button className='inputBtn' type="submit" onClick={toggleDiv1}>Enviar</button>
                </form>
                {showDiv1 && <div className='alert'>
                    <h1 className='alertMessage'>Usuario actualizado!</h1>
                </div>}
            </div>}

        </section>
    )
} 