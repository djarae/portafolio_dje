import Proyecto from './proyecto/Proyecto.js';
import '../../styles/Proyectos.css';
import ProyectosTxt from "../../data/proyectos.json";

function Proyectos() {

  function getProyectos(){
    let proyectos = [];
    for (let i=0;i<ProyectosTxt.length;i++){
       proyectos.push( <div className="divProyectosI"><div class="d-none  d-sm-flex d-md-flex  d-lg-flex d-xl-flex  justify-content-center" ><div class="container  col-6  rounded bg-dark row"><Proyecto id={i}></Proyecto></div></div></div>)
       proyectos.push(    <div className="divProyectosI"><div class="d-sm-none d-flex  justify-content-center" ><div class="container  col-10  rounded bg-dark row"><Proyecto id={i}></Proyecto></div></div></div>)
    }
    return(proyectos);

  }

  return (
  <div className='divProyectos'>
    <p class="justify-content-center" className="titulo-proyecto">Proyectos</p>
       { getProyectos()}
  </div>
  );
}
export default Proyectos;
