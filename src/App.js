import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AcercaDeMi from './components/acercademi/AcercaDeMi.js'
import Presentacion from './components/presentacion/Presentacion.js';
import MisProyectos from './components/misproyectos/MisProyectos.js';
import Conocimientos from './components/conocimientos/Conocimientos.js';
import Contacteme from './components/contacteme/Contacteme.js';


function App() {
  return (
    <div>
      <header className="App-header">
        <nav className="navBar">
          <a href="#home"  style={{ fontSize: "2.3rem",fontFamily: "ui-sans-serif",fontWeight:"600"}}>Home</a>
          <a href="#proyectos"  style={{ fontSize: "2.3rem",fontFamily: "ui-sans-serif",fontWeight:"600"}}>Proyectos</a>
          {/* <a href="#conocimientos"  style={{ fontSize: "2.3rem",fontFamily: "ui-sans-serif",fontWeight:"600"}}>Conocimientos</a> */}
          <a href="#contacteme"  style={{fontSize: "2.3rem",fontFamily: "ui-sans-serif",fontWeight:"600"}}>Contacteme</a>
        </nav>
      </header>
      <body  className="App-body">
        <section className="sectionComponente" id="home">        <Presentacion> </Presentacion> </section>
        <section className="sectionHeader"id="acercademi">  <AcercaDeMi>   </AcercaDeMi>   </section>
        <section className="sectionHeader" id="proyectos">   <MisProyectos> </MisProyectos> </section>
        {/* <section className="sectionHeader" id="conocimientos">      <Conocimientos></Conocimientos> </section> */}
        <section className="sectionHeader" id="contacteme">      <Contacteme></Contacteme> </section>
      </body>
    </div>
  );
}

export default App;


