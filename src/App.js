import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AcercaDeMi from './components/acercademi/AcercaDeMi.js'
import Conocimientos from './components/conocimientos/Conocimientos.js';
import Presentacion from './components/presentacion/Presentacion.js';
import MisProyectos from './components/misproyectos/MisProyectos.js';
//import Espacios from './components/espacios/Espacios.js';
function App() {
  return (
    <div>
      <header className="App-header">
        <nav className="navBar">
          <a href="#home">Home</a>
          {/* <a href="#acercademi">Acerca De Mi</a> */}
          <a href="#proyectos">Proyectos</a>
        </nav>
      </header>
      <body  className="App-body">
        <section className="sectionComponente" id="home">        <Presentacion> </Presentacion> </section>
        <section className="sectionHeader"id="acercademi">  <AcercaDeMi>   </AcercaDeMi>   </section>
        <section className="sectionHeader" id="proyectos">   <MisProyectos> </MisProyectos> </section>
        <Conocimientos></Conocimientos>
      </body>
    </div>
  );
}

export default App;


