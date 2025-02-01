import Portfolio from './portfolio/Portfolio.js';
import Gastos from './gastos/Gastos.js';
import '../../styles/MisProyectos.css';

function MisProyectos() {
  return (
  <div className='divProyectos'>
    <p class="justify-content-center" className="titulo-proyecto">Proyectos</p>
    <div className="divProyectosI"><div class=" d-flex justify-content-center" ><Portfolio></Portfolio></div></div>
    <div className="divProyectosI"><div class=" d-flex justify-content-center"  ><Gastos></Gastos></div></div>
  </div>
  );
}
export default MisProyectos;
