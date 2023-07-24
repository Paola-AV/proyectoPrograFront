
export function HomeT(){
    return(
        <section className="homeTSec">
            <div>
                <img className="imgHomeT" src="cover1.jpg"></img>
                <h1 className="coverHome">Bienvenido</h1>
            </div>
            <div className="homeOptions">

                <div className="HomeBox">
                    <h2 className="homeP">Tu informacion</h2>
                    <p className="homeP">Revisa tu informacion<br/>Cambio de contraseña<br/>Cambio de pin</p>
                </div>

                <div className="HomeBox">
                    <h2 className="homeP">Propiedades</h2>
                    <p className="homeP">Consulta propiedades<br/>En venta y alquiler</p>
                </div>

                <div className="HomeBox">
                    <h2 className="homeP">Clientes</h2>
                    <p className="homeP">Consulta clientes y<br/>contacto</p>
                </div>
            </div>
        </section>
    )
}