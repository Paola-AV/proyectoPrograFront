import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function Perfil() {
    //variables para las funciones que muestran divs y cambio de propiedad flex-direction
    const navigate = useNavigate()
    const [showDiv, setShowDiv] = useState(false);
    const [showDiv1, setShowDiv1] = useState(false);
    const [flexDirection, setFlexDirection] = useState('column');
    //variables para el post
    const form = useRef();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [gmail, setGmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cedula, setCedula] = useState('');
    const [file, setFile] = useState('');
    const [idfiador, setIdfiador] = useState('');
    //variable para get
    const [usuario, setUsuario] = useState([]);

    //muestra el div al ser true, al presionar el boton retorna true y enseña el div
    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };
    //muestra el div al ser true, al presionar el boton retorna true y enseña el div
    const toggleDiv1 = () => {
        setShowDiv1(!showDiv1);
        // Cambiar la dirección de flex basada en el estado actual
        setFlexDirection(flexDirection === 'column' ? 'row' : 'column');
    };

    //funcion post para fiador
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { nombre, apellido, telefono, gmail, direccion, cedula };

        fetch('http://localhost:8000/fiador', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('nuevo cliente interesado');
            setIdfiador("1")
        })

        const blob = { file, idfiador };
        fetch('http://localhost:8000/fiador', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blob)
        }).then(() => {
            console.log('nuevo cliente interesado');
        })
    }
    //funcion get para la informacion del usuario
    useEffect(() => {
        fetch('http://localhost:8000/usuario/5')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsuario(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <section>
            <div>
                <img className="PerfilImg" src="PerfilImg.jpg"></img>
                <h1 className="PerfilTittle">Bienvenido!</h1>
            </div>
            <div className="BtnDivPerfil">
                <button className="BtnPerfil" onClick={() => navigate('/')}>Ver propiedades</button>
                <button className="BtnPerfil" onClick={() => navigate('/Contacto')}>Contactanos</button>
                <button className="BtnPerfil" onClick={toggleDiv}>Ver tu informacion</button>
            </div>
            {showDiv && <div className="PerfilInfo" style={{ display: 'flex', flexDirection: flexDirection }}>
                <div className="infoUsuarioPerfil" key={usuario.id}>
                    <h2 className="HPerfil">Tu informacion!</h2>
                    <h2 className="HPerfil">{usuario.nombre} {usuario.apellido}</h2>
                    <button onClick={toggleDiv1} className="BtnInfoPerfil" >Agregar fiador</button>
                </div>
                {showDiv1 && <div className="InputFiador" ref={form} onSubmit={handleSubmit}>
                    <div><p>Recuerda que tu fiador debe ser propietario!</p></div>
                    <div className="inputDivFiador">
                        <label>Nombre</label>
                        <input className="input" type="text" value={nombre}
                            onChange={(e) => setNombre(e.target.value)} ></input>
                    </div>
                    <div className="inputDivFiador">
                        <label>Apellido</label>
                        <input className="input" type="text" value={apellido}
                            onChange={(e) => setApellido(e.target.value)} ></input>
                    </div>
                    <div className="inputDivFiador">
                        <label>Cedula</label>
                        <input className="input" type="text" value={cedula}
                            onChange={(e) => setCedula(e.target.value)} ></input>
                    </div>
                    <div className="inputDivFiador">
                        <label>Telefono</label>
                        <input className="input" type="text" value={telefono}
                            onChange={(e) => setTelefono(e.target.value)} ></input>
                    </div>
                    <div className="inputDivFiador">
                        <label>Gmail</label>
                        <input className="input" type="text" value={gmail}
                            onChange={(e) => setGmail(e.target.value)} ></input>
                    </div>
                    <div className="inputDivFiador">
                        <label>Direccion</label>
                        <input className="input" type="text" value={direccion}
                            onChange={(e) => setDireccion(e.target.value)} ></input>
                    </div>
                    <div className="inputDivFiador">
                        <label>Documento de Propiedad</label>
                        <input type="file" className="input" value={file}
                            onChange={(e) => setFile(e.target.value)}></input>
                    </div>
                    <button type="submit"></button>
                </div>}
            </div>}

        </section>
    )
}