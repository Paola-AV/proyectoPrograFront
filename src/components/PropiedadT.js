import { useNavigate } from "react-router-dom";

export function PropiedadT() {
    const navigate=useNavigate()

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

                    <tr className="tableRowPropiedad">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>

                </table>
            </div>
            <div className="BtnDiv">
            <button className="AplicaBtn" onClick={() => navigate('/NuevaPropiedad')}>Nueva Propiedad</button>
            </div>
            
        </section>
    )
}