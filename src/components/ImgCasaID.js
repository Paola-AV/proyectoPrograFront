import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
//componente que muestra las imagenes segun el ID de la propiedad
export function ImgCasaID({ propiedadID }) {
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

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? imagen.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === imagen.length - 1 ? 0 : prevIndex + 1));
    };

    const imageElements = imagen.map((imagen, index) => (
        <img className='imgCarouselMin' key={index} src={`http://localhost:8000/${imagen.path}`} alt={`Image ${index}`} />
    ));

    return (
        <div className="carouselMin">
            <button onClick={prevImage} className='BtnArrow'><IoIosArrowBack className='Arrow' /></button>
            {imageElements[currentImageIndex]}
            <button onClick={nextImage} className='BtnArrow'> <IoIosArrowForward className='Arrow' /> </button>
        </div>
    )
}