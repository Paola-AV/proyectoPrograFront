import { useEffect, useState } from "react";

export function Direccion(){
    const [direccion, setDireccion] = useState([]);
    const [propiedad, setPropiedad] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:8000/propiedad'),
          fetch('http://localhost:8000/direccion'),
        ])
          .then(([resPropiedad, resDireccion]) => 
            Promise.all([resPropiedad.json(), resDireccion.json()])
          )
          .then(([dataPropiedad, dataDireccion]) => {
            setPropiedad(dataPropiedad);
            setDireccion(dataDireccion);

          });
      }, []);

      return(
        <section>
            <div className="propiedadesContainer">
               
               {propiedad.map(propiedad => (
                <div key={propiedad.id}  className="propiedadesDiv">  
                <h3>{propiedad.nombre}</h3>
                {direccion.map(direccion=>(
                    <section><h3>{direccion.provincia}</h3></section>
                ))}
                <div><h3>Cuartos: {propiedad.cuartos}  Baños: {propiedad.banos} </h3></div>
                </div>
               ))}
                
            </div>
        </section>
      )

}