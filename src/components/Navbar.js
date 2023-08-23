//componente para el navar
function Navbar() {
    return (
        <section>
            <header id="nav">
                <div className="navLogo" >
                    <img id="logo" src="logoHouse.png"></img>
                </div>
                <ul class="navbar">
                    <li><a className="a" href="/">Inicio</a></li>
                    <li><a className="a" href="/SobreNosotros">Nosotros</a></li>
                    <li><a className="a" href="/Contacto">Contacto</a></li>
                    <li><a className="a" href="/casas">Propiedades</a></li>
                    <li><a className="a" href="/login">Inicia sesion</a></li>
                </ul>
            </header>
        </section>
    )
}

export default Navbar