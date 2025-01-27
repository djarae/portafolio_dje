import GastosTexto from "../../../data/gastos.json"

import iconoJS from '../../../assets/Icon/iconoJS.svg';
import './Gastos.css';

function Gastos() {
  return (
  <div class="container col-6 rounded bg-secondary row justify-content-center" >
    <p class="h1 row justify-content-center text-light" style={{ fontSize: "2.9rem",fontStyle:"italic" }}>Gastos</p>
    
    <img className="iconoEstilos" src={iconoJS} />
    <h1 class="text-center display-8 fs-4" className="textoPortafolio">{GastosTexto[0].texto} </h1>
  </div>
  );
}
export default Gastos;
