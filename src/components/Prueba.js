import React, { useState } from 'react';

export function Prueba(){
  
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = () => {
    if (!image) {
      alert('Por favor, seleccione una imagen.');
      return;
    }
  }
  
  const formData = new FormData();
  formData.append('image', image);

    fetch('http://localhost:8000/imagen', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del backend si es necesario
        console.log(data.message);
      })
      .catch((error) => {
        // Aquí puedes manejar cualquier error que ocurra durante la subida de la imagen
        console.error('Error al subir la imagen', error);
      });
    return(
        <section>
            <div>
                <input type="file" onChange={handleImageChange}></input>
                <button onClick={handleImageUpload}>Guardar</button>
            </div>
        </section>
    )
}

