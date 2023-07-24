
function Navbar() {
    return (
        <section>
            <header id="nav">
                <div className="navLogo" >
                    <img id="logo" src="logoHouse.png"></img>
                </div>
                <ul class="navbar">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/SobreNosotros">Nosotros</a></li>
                    <li><a href="/Contacto">Contacto</a></li>
                    <li><a href="#services">Propiedades</a></li>
                    <li><a href="/login">Inicia sesion</a></li>
                </ul>
            </header>
        </section>
    )
}

export default Navbar