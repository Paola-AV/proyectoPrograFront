import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
//componente con la informacion de propiedades segun el ID de la propiedad

export function HouseId() {
  //permite navegar por la pagina al pasarle una ruta usando botones y onClick
  const navigate = useNavigate()
  //llamada a params() funcion de react para pasar el ID de la propiedad
  const params = useParams();

  const propiedadID = params.propiedadID;
  //variables para get
  const [propiedad, setPropiedad] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const [imagen, setImagen] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/imagen/imagen/' + propiedadID)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImagen(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/propiedad/' + propiedadID)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPropiedad(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:8000/direccion/direccion/' + propiedadID)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDireccion(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? imagen.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === imagen.length - 1 ? 0 : prevIndex + 1));
  };

  const imageElements = imagen.map((imagen, index) => (
    <img className='imgCarousel' key={index} src={`http://localhost:8000/${imagen.path}`} alt={`Image ${index}`} />

  ));


  return (
    <section className='casaIDSec'>

      <div className="carousel">
        <button onClick={prevImage} className='BtnArrow'><IoIosArrowBack className='Arrow' /></button>
        {imageElements[currentImageIndex]}
        <button onClick={nextImage} className='BtnArrow'> <IoIosArrowForward className='Arrow' /> </button>
      </div>


      <div className='infoCasaID'>

        <div className='DescripcionCasaID' key={propiedad.id}>
          <h3 className="casaTitulo">{propiedad.nombre}</h3>
          <div><h3 className="casaDetalle">{propiedad.descripcion}</h3></div>
          <div><h3 className="casaDetalle">Cuartos: {propiedad.cuartos}  Baños: {propiedad.banos} </h3></div>
          <div><h3 className="casaDetalle">Precio: ₡{propiedad.precio}.000</h3></div>
        </div>

        {direccion.map(direccion => (
          <div className='AplicaCasaID' key={direccion.id}>
            <h2>Se encuentra en:</h2>
            <h3>{direccion.canton}, {direccion.distrito}, {direccion.provincia}</h3>
            <h3>{direccion.señales}</h3>
            <button className='AplicaBtn' onClick={() => navigate('/Contacto')}>Aplica Ahora!</button>
          </div>
        ))}
      </div>
    </section>

  )
}