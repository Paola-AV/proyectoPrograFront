import { useEffect, useState } from "react";
import Houses from "./Houses";
//componente con direccion segun el ID de la propiedad
export function Direccion({ propiedadID }) {
  const [direccion, setDireccion] = useState([]);

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

  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <> {direccion.map(direccion => (
      <div key={direccion.id}>
        <p>{direccion.canton}, {direccion.distrito}, {direccion.provincia}</p>
      </div>
    ))}

    </>
  )

}