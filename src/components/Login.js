

function Login(){
    return (
        <section className="loginSec">
            <div className="loginCol1">
                <img id="loginImg" src="loginImg.jpg" />
            </div>
            <div className="loginCol2">
                <h2>Inicio de Sesión</h2>
                <p>Bienvenido al sistema de CasaReal, introduce tu ID y contraseña:</p>

                <div className="inputLogin">
                    <label>ID del usuario</label>
                    <input type="text" className="inputLog"></input>
                </div>

                <div className="inputLogin">
                    <label>Contraseña</label>
                    <input type="password" className="inputLog"></input>
                </div>

                <div>
                    <div className="inicioBtn"> 
                        <button className="sesionBtn">Inicia sesion</button>
                    </div>
                    
                    <p className="sesionP">Aun no tienes una cuenta? <a className="sesionA">Suscribete</a></p>
                </div>
                
            </div>
        </section>
    )
}

export default Login;