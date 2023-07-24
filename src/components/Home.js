import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function Home(){
    /*funcion para animaciones on-scroll*/
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    /*esta constante hace uso de la funcion Navigate para usarla en eventos onClick y visualizar nuevos componentes*/
      const navigate=useNavigate()
      
    return(
        <section className="homeSec">
            <div className="homeImg">
                <img src="/imagenes/home3.jpg" id="homeImg" alt="family in home"></img>
                <h1 className="homeTittle">Encuentra tu proximo hogar</h1>
            </div>

            <div className="optionBox">
                <h2 className="buscaTittle">Busca propiedades</h2>
                <div className="buscaBtnDiv">
                    <a className="buscaBtn">En Venta</a>
                    <a className="buscaBtn">En Alquiler</a>
                </div>
            </div>

            <div className="iconDiv">
                <div className="iconComp">
                    <img className="icon" src="casa.png"/>
                    <h3 data-aos="fade-up">Encuentra tu hogar comodamente</h3>
                </div>
                <div className="iconComp">
                    <img className="icon" src="stay-at-home.png"/>
                    <h3 data-aos="fade-up">Busca segun tus necesidades</h3>
                </div>
                <div className="iconComp">
                    <img className="icon" src="hogar.png"/>
                    <h3 data-aos="fade-up">Realiza tus tramites de forma rapida</h3>
                </div>
            </div>
{/*botones con evento onClick que renderiza nuevos componentes*/}
            <div className='iconBtnDiv'>
                <button className='iconBtn' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1500" onClick={() => navigate('Privacidad')}>Conoce nuestra politica de privacidad</button>
                <button className='iconBtn' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1500" onClick={() => navigate('Terminos')}>Conoce nuestros terminos y condiciones</button>
            </div>

        </section>
    )

}

export default Home;