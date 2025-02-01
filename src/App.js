import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Presentacion from './components/presentacion/Presentacion.js';
import MisProyectos from './components/misproyectos/MisProyectos.js';
import Conocimientos from './components/conocimientos/Conocimientos.js';
import Contacteme from './components/contacteme/Contacteme.js';
import NavBar from './components/navbar/Navbar.js'
function App() {
  return (
    <div>
     <header className="App-header">
      <NavBar></NavBar>
     </header>
     <body className="App-body">
      <section className="sectionComponente" id="home"><Presentacion></Presentacion></section>
      <section className="sectionHeader" id="conocimientos"><Conocimientos></Conocimientos> </section>
      <section className="sectionHeader" id="proyectos"><MisProyectos></MisProyectos></section>
      <section className="sectionHeader" id="contacteme"><Contacteme></Contacteme></section>
     </body>
    </div>
  );
}
export default App;


