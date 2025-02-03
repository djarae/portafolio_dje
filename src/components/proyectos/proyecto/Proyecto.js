import '../../../styles/Portfolio.css';
import ProyectosTxt from "../../../data/proyectos.json"
import IconsGenerator  from './iconsgenerator/IconsGenerator';

function Proyecto(props) {
  return (
    <div>
      <p class="h1 row justify-content-center text-light"  style={{ fontSize: "2.9rem",fontStyle:"italic" }} >{ProyectosTxt[props.id].titulo} </p>
      <h1 class="text-left display-8 fs-4" className="textoPortafolio">{ProyectosTxt[props.id].texto} </h1>
      <IconsGenerator arrayIcons={ProyectosTxt[props.id].iconos}></IconsGenerator>
    </div>
  );
}
export default Proyecto;
