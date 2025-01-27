import NotasTexto from "../../../data/notas.json"
import iconoReact from '../../../assets/Icon/icons8-reaccionar.svg';
import iconoHtml from '../../../assets/Icon/iconoHtml.svg';
import iconoCss from '../../../assets/Icon/iconoCss.svg';
import iconoJS from '../../../assets/Icon/iconoJS.svg';
import './Notas.css';

function Notas() {
  return (
  <div class="container col-6 rounded bg-secondary row justify-content-center" >
    <p class="h1 row justify-content-center text-light" style={{ fontSize: "2.9rem",fontStyle:"italic" }}>Notas</p>
   
    <img className="iconoEstilos" src={iconoJS} />
    <h1 class="text-center display-8 fs-4" className="textoPortafolio">{NotasTexto[0].texto} </h1>
  </div>
  );
}
export default Notas;
