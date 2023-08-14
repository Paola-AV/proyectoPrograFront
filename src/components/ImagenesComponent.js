import React, { useState } from 'react';

function ImagenesComponent() {
  const [imagenes, setImagenes] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Función para manejar el cambio en el input de archivos
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Función para enviar el archivo al backend
  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('imagen', selectedFile);

      const response = await fetch('http://localhost:8000/imagen/imagen/guardar', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Imagen cargada exitosamente');
        // Refrescar las imágenes después de cargar una nueva
        fetchImagenes();
      } else {
        console.error('Error al cargar la imagen');
      }
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  };

  // Función para obtener las imágenes desde el backend
  const fetchImagenes = async () => {
    try {
      const response = await fetch('http://localhost:8000/imagen');
      if (response.ok) {
        const data = await response.json();
        setImagenes(data);
      }
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
    }
  };

  return (
    <div>
      <h1>Imágenes</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Subir Imagen</button>
      <div>
        {imagenes.map((imagen) => (
          <img
            key={imagen.id}
            src={imagen.path}
            alt={`Imagen ${imagen.id}`}
            style={{ width: '200px', height: 'auto', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagenesComponent;
