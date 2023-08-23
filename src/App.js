
import './App.css';
import { Routes, Route } from "react-router-dom";
/*imports de cada componente*/
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Privacidad from './components/Privacidad';
import Footer from './components/Footer';
import Houses from './components/Houses';
import Terminos from './components/Terminos';
import { Contact } from './components/Contact';
import { HomeT } from './components/HomeT';
import { Usuario } from './components/Usuario';
import { ClientesT } from './components/ClientesT';
import { Direccion } from './components/Direccion';
import { HouseId } from './components/HouseId';
import { PropiedadT } from './components/PropiedadT';
import { NuevaPropiedad } from './components/NuevaPropiedad';
import { NuevoUsuario } from './components/NuevoUsuario';
import { Perfil } from './components/Perfil';
import { Gmail } from './components/Gmail';



function App() {
  return (
    <> {/*fragmento que encierra el html*/}
      <Navbar /> {/*Navbar y Footer se encuentran fuera de las rutas para que sean renderizados en cualquiera*/}
      <Routes> {/*rutas para visualizar cada componente*/}
        <Route path='/' element={<div><Home /></div>}></Route> {/*esta sera la ruta inicial*/}
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/SobreNosotros' element={<About />}></Route>
        <Route path='/Privacidad' element={<Privacidad></Privacidad>}></Route>
        <Route path='/casas' element={<Houses />}></Route>
        <Route path='/Terminos' element={<Terminos />}></Route>
        <Route path='/Contacto' element={<Contact />}></Route>
        <Route path='/Inicio' element={<HomeT />}></Route>
        <Route path='/Usuario' element={<Usuario />}></Route>
        <Route path='/Cliente' element={<ClientesT />}></Route>
        <Route path='direc' element={<Direccion />}></Route>
        <Route path='/CasaID/:propiedadID' element={<HouseId />}></Route>
        <Route path='/Propiedad' element={<PropiedadT />}></Route>
        <Route path='/NuevaPropiedad' element={<NuevaPropiedad />}></Route>
        <Route path='/NuevoUsuario' element={<NuevoUsuario />}></Route>
        <Route path='/Perfil' element={<Perfil />}></Route>
        <Route path='/gmail' element={<Gmail />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;

/*
3mo8GyLQk3lktda3v
asjF5iLadr0eu2vrOdvV4
*/

