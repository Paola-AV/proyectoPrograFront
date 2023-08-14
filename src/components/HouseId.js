import React from 'react';
import { useNavigate } from "react-router-dom";

export function HouseId() {
    const navigate=useNavigate()
    return (
        <section className='casaIDSec'>
            <div className="CarruselPropiedad">
                <h2 className='CasaIdTittle'>Casa en condominio</h2>
                <img id="imgId" src='casa1.jpg'></img>
            </div>
            <div className='infoCasaID'>
                <div className='DescripcionCasaID'>
                    <h2>Casa familiar, amplias zonas verdes</h2>
                    <h3>Cuartos: 3  Banos: 2 </h3>
                    <h3>Precio mensual: $450.000</h3>
                </div>
                <div className='AplicaCasaID'>
                    <h2>Se encuentra en:</h2>
                    <h3>Alajuela, San Ramon, San Juan, condominio VillaReal</h3>
                    <button className='AplicaBtn' onClick={() => navigate('/Contacto')}>Aplica Ahora!</button>
                </div>
                
               
            </div>
        </section>

    )
}