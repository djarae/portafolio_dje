import InglesTexto from "../../../data/ingles.json"

import iconoJS from '../../../assets/Icon/iconoJS.svg';
import './Ingles.css';

function Ingles() {
  return (
  <div class="container col-6 rounded bg-secondary row justify-content-center" >
    <p class="h1 row justify-content-center text-light" style={{ fontSize: "2.9rem",fontStyle:"italic" }}>Ingles</p>
    
    <img className="iconoEstilos" src={iconoJS} />
    <h1 class="text-center display-8 fs-4" className="textoPortafolio">{InglesTexto[0].texto} </h1>
  </div>
  );
}
export default Ingles;
