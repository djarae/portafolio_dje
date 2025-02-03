import Proyecto from './proyecto/Proyecto.js';
import '../../styles/Proyectos.css';



function Proyectos() {
  return (
  <div className='divProyectos'>
    
    <p class="justify-content-center" className="titulo-proyecto">Proyectos</p>
    {/*Pantallas para pc*/}
    <div className="divProyectosI"><div class="d-none  d-sm-flex d-md-flex  d-lg-flex d-xl-flex  justify-content-center" ><div class="container  col-5  rounded bg-dark row"><Proyecto id="0"></Proyecto></div></div></div>
    <div className="divProyectosI"><div class="d-none  d-sm-flex d-md-flex  d-lg-flex d-xl-flex  justify-content-center" ><div class="container  col-5  rounded bg-dark row"><Proyecto id="1"></Proyecto></div></div></div>
    {/*Pantallas para celu*/}
    <div className="divProyectosI"><div class="d-sm-none d-flex  justify-content-center" ><div class="container  col-9  rounded bg-dark row"><Proyecto id="0"></Proyecto></div></div></div>
    <div className="divProyectosI"><div class="d-sm-none d-flex  justify-content-center" ><div class="container  col-9  rounded bg-dark row"><Proyecto id="1"></Proyecto></div></div></div>
 
  </div>
  );
}
export default Proyectos;
