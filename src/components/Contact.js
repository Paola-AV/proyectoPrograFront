/*import de iconos desde react-icons*/
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWaze } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import Formulario from "./Formulario";

export function Contact() {
    return (
        <section className="ContactSec">
            <h3 className="tittleContact">Contactanos</h3>
            <section className="row">
                <div className="contactRowDiv1">
                    <div id="mapDiv">
                        <p className="infoContact">Nos ubicamos 300 metros sur del parque la sabana,<br></br> San Jose, Costa Rica</p>
                        {/*iframe de google maps para visualizar el mapa*/}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.0615224122973!2d-84.43535439670086!3d10.05869746055714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa04539d5d5b5b3%3A0x592a537ebe3dc532!2sOlikey%20Coffee%20Roasters!5e0!3m2!1ses!2scr!4v1684939665538!5m2!1ses!2scr"
                            width="450"
                            height="300"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className="mapIconDiv">
                            <a><FaWaze id="mapIcon"></FaWaze></a>
                            <a><FaMapMarkerAlt id="mapIcon"></FaMapMarkerAlt></a>
                        </div>
                    </div>
                </div>
                <div className="contactRowDiv">
                    <h2>Telefono</h2>
                    <p>2617-8945</p>
                    <h2>Gmail</h2>
                    <p>EnCasa@gmail.com</p>

                    <h2 id="space">O escribenos</h2>
                    <FaArrowCircleDown className="iconContact" />
                </div>
            </section>
            <section className="formularioSec">
                <h3 className="formTittle">Escribenos y pronto te contactaremos!</h3>
                <Formulario/>
            </section>

        </section>
    )
}