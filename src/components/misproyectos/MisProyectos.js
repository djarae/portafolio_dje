import Portfolio from './portfolio/Portfolio.js';
import Gastos from './gastos/Gastos.js';
import Notas from './notas/Notas.js';
import Ingles from './ingles/Ingles.js';


import './MisProyectos.css';

function MisProyectos() {
  return (
  <div className='divProyectos'>
    <p class="h1 row justify-content-center" className="tituloProyectos">Proyectos</p>
    <div className="divProyectosI"><div class="container d-flex justify-content-center" ><Portfolio></Portfolio></div></div>
    <div className="divProyectosI"><div class="container d-flex justify-content-center"  ><Gastos></Gastos></div></div>
    {/* <div className="divProyectosI"><div class="container d-flex justify-content-center"  ><Ingles></Ingles></div></div> */}
    
    {/* <div className="divProyectosI"><div class="container d-flex justify-content-center" ><Notas></Notas></div></div> */}
  </div>
  );
}
export default MisProyectos;
