

export function NuevaPropiedad() {

    return (
        <section className="NuevaPropiedadSec">
            <h1 className="PropiedadTTittle">Nueva Propiedad</h1>
            <div className="FormDiv">
                <div className="Form">
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Titulo</label>
                        <input className='input' id="input"></input>
                    </div>
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Descripcion</label>
                        <input className='input' id="input"></input>
                    </div>
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Cuartos</label>
                        <input className='input' id="input"></input>
                    </div>
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Baños</label>
                        <input className='input' id="input"></input>
                    </div>
                </div>

                <div className="Form">
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Direccion</label>
                        <input className='input' id="input"></input>
                    </div>
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Tipo de propiedad</label>
                        <select className="filtroSelectPropiedad">
                            <option>Alquiler</option>
                            <option>Venta</option>
                        </select>
                    </div>
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Precio</label>
                        <input className='input' id="input"></input>
                    </div>
                    <div className="inputDiv" id="inputDiv">
                        <label className='inputLabel'>Fecha de pago</label>
                        <input className='input' id="input"></input>
                    </div>
                </div>
            </div>
            <div>
                    <h2>Ingresa tus fotos</h2>
                    <input type="file"></input>
                    <button>Guardar</button>
                </div>


        </section>
    )
}