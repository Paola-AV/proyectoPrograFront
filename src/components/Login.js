
function Login(){
    return (
        <section className="loginSec">
            <div className="loginCol1">
                <img id="loginImg" src="loginImg.jpg" />
            </div>
            <div className="loginCol2">
                <h2>Inicio de Sesión</h2>
                <p>Bienvenido al sistema de CasaReal, introduce tu ID y pin de cuatro digitos:</p>

                <div className="inputLogin">
                    <label>ID del usuario</label>
                    <input type="text" className="inputLog"></input>
                </div>

                <div className="inputLogin">
                    <labe>Pin de cuatro digitos</labe>
                    <input type="password" className="inputLog"></input>
                </div>
                
            </div>
        </section>
    )
}

export default Login;