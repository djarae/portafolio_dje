import Portfolio from './portfolio/Portfolio.js';
import './MisProyectos.css';

function MisProyectos() {
  return (
  <div class="container" >
    <p class="h1 row justify-content-center" className="tituloProyectos">Proyectos</p>
    <div class="container d-flex justify-content-center" ><Portfolio></Portfolio></div>
  </div>
  );
}
export default MisProyectos;
