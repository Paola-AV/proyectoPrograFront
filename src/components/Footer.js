/*import de iconos de react-icons*/
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2} from "react-icons/im";
import { FaTiktok} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Footer() {
    const navigate=useNavigate()
    return(
        <section className="footerSec">
            <div className="footerComp">
                <h2 className="footerTittle1">EnCasa</h2>
                <p id="footerP1">Encuentra tu proximo hogar</p>
                <p id="footerP"> Nos enfocamos en ofrecer casas para venta y alquiler con la mayor calidad del mercado y la mayor facilidad de tramites.</p>
            </div>

            <div className="footerComp">
                <ul className="footerUl">
                <li><a className="footerA" onClick={() => navigate('Privacidad')}>Venta</a></li>
                <li><a className="footerA" onClick={() => navigate('Privacidad')}>Alquiler</a></li>
                <li><a className="footerA" onClick={() => navigate('/SobreNosotros')}>Sobre nosotros</a></li>
                <li><a className="footerA" onClick={() => navigate('/Contacto')}>Contactanos</a></li>
                </ul>
            </div>

            <div className="footerComp1">
                <h2  className="footerTittle">Conecta con nosotros</h2>
                <div className="icons">
                    <a className="iconA" href="https://www.instagram.com/weratedogs/" target="_blank"><FaInstagram id="icon"/></a>
                    <a className="iconA" href="https://www.facebook.com/WeRateDogs" target="_blank"><ImFacebook2 id="icon"/></a>
                    <a className="iconA" href="https://www.tiktok.com/@weratedogs?_t=8eT0W90mlWf&_r=1" target="_blank"><FaTiktok id="icon"/></a>
                </div>
            </div>
        </section>
    )
}

export default Footer;