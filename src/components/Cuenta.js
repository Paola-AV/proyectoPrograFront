
export function Cuenta() {
    return(
        <><form>
            <div className='inputDiv'>
                <label className='inputLabel'>Nombre</label>
                <input className='input' type="text" />
            </div>

            <div className='inputDiv'>
                <label className='inputLabel'>Apellido</label>
                <input className='input' type="text" />
            </div>

            <div className='inputDiv'>
                <label className='inputLabel'>Telefono</label>
                <input className='input' type="text" />
            </div>

            <div className='inputDiv'>
                <label className='inputLabel'>Gmail</label>
                <input className='input' type="gmail" />
            </div>
            <div className='inputDiv'>
                <label className='inputLabel'>Contraseña</label>
                <input className='input' type="gmail" />
            </div>
            <div className='inputDiv'>
                <button className="fiadorBtn">Deseas agregar un fiador?</button>
            </div>
            <div className='inputDiv'>
                <button className="fiadorBtn">Crear usuario</button>
            </div>
        </form>
        
        <form>
            <p>Incluye la informacion de tu posible fiador</p>
        <div className='inputDiv'>
                <label className='inputLabel'>Nombre</label>
                <input className='input' type="text" />
            </div>

            <div className='inputDiv'>
                <label className='inputLabel'>Apellido</label>
                <input className='input' type="text" />
            </div>

            <div className='inputDiv'>
                <label className='inputLabel'>Telefono</label>
                <input className='input' type="text" />
            </div>

            <div className='inputDiv'>
                <label className='inputLabel'>Gmail</label>
                <input className='input' type="gmail" />
            </div>
            <div className='inputDiv'>
                <label className='inputLabel'>Direccion</label>
                <input className='input' type="gmail" />
            </div>
        </form></>
    );
}