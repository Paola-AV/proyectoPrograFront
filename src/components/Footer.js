/*import de iconos de react-icons*/
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2} from "react-icons/im";
import { FaTiktok} from "react-icons/fa";

function Footer() {
    return(
        <section className="footerSec">
            <div className="footerComp">
                <h2 className="footerTittle1">EnCasa</h2>
                <p id="footerP1">Encuentra tu proximo hogar</p>
                <p id="footerP"> Nos enfocamos en ofrecer casas para venta y alquiler con la mayor calidad del mercado y la mayor facilidad de tramites.</p>
            </div>

            <div className="footerComp">
                <ul className="footerUl">
                <li><a className="footerA">Venta</a></li>
                <li><a className="footerA">Alquiler</a></li>
                <li><a className="footerA">Sobre nosotros</a></li>
                <li><a className="footerA">Contactanos</a></li>
                </ul>
            </div>

            <div className="footerComp1">
                <h2  className="footerTittle">Conecta con nosotros</h2>
                <div className="icons">
                <FaInstagram id="icon"/>
                <ImFacebook2 id="icon"/>
                <FaTiktok id="icon"/>
                </div>
            </div>
        </section>
    )
}

export default Footer;