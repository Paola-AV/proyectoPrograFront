
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
import Connect from './components/Connect';
import { Contact } from './components/Contact';
import { Prueba } from './components/Prueba';
import { HomeT } from './components/HomeT';


function App() {
  return (
    <> {/*fragmento que encierra el html*/}
    <Navbar/> {/*Navbar y Footer se encuentran fuera de las rutas para que sean renderizados en cualquiera*/}
      <Routes> {/*rutas para visualizar cada componente*/}
        <Route path='/' element={<div><Home/></div>}></Route> {/*esta sera la ruta inicial*/}
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SobreNosotros' element={<About/>}></Route>
        <Route path='/Privacidad' element={<Privacidad></Privacidad>}></Route>
        <Route path='/casas' element={<Houses/>}></Route>
        <Route path='/Terminos' element={<Terminos/>}></Route>
        <Route path='/Prueba' element={<Prueba/>}></Route>
        <Route path='/Contacto' element={<Contact/>}></Route>
        <Route path='/Inicio' element={<HomeT/>}></Route>
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;

