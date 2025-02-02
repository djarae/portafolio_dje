import Portfolio from './portfolio/Portfolio.js';
import PortfolioCelu from './portfoliocelu/PortfolioCelu.js';
import Gastos from './gastos/Gastos.js';
import GastosCelu from './gastoscelu/GastosCelu.js';

import '../../styles/Proyectos.css';

function Proyectos() {
  return (
  <div className='divProyectos'>
    <p class="justify-content-center" className="titulo-proyecto">Proyectos</p>
    <div className="divProyectosI"><div class="d-none d-md-flex  d-lg-flex d-xl-flex  justify-content-center" ><Portfolio></Portfolio></div></div>
    <div className="divProyectosI"><div class="d-none d-md-flex  d-lg-flex d-xl-flex d-flex justify-content-center"  ><Gastos></Gastos></div></div>
    <div className="divProyectosI"><div class="d-sm-none d-flex justify-content-center" ><PortfolioCelu></PortfolioCelu></div></div>
    <div className="divProyectosI"><div class="d-sm-none d-flex justify-content-center" ><GastosCelu></GastosCelu></div></div>

  </div>
  );
}
export default Proyectos;
