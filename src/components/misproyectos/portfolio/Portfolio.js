import PortfolioTexto from "../../../data/portfolio.json"
import iconoReact from '../../../assets/Icon/icons8-reaccionar.svg';
import iconoHtml from '../../../assets/Icon/iconoHtml.svg';
import iconoCss from '../../../assets/Icon/iconoCss.svg';
import iconoJS from '../../../assets/Icon/iconoJS.svg';
import './Portfolio.css';

function Portfolio() {
  return (
  <div class="container col-6 rounded bg-secondary row justify-content-center"  >
    <p class="h1 row justify-content-center text-light" >Portfolio</p>
    <img className="iconoEstilos" src={iconoReact}  />
    <img className="iconoEstilos" src={iconoHtml}  />
    <img className="iconoEstilos" src={iconoCss}/>
    <img className="iconoEstilos" src={iconoJS} />
    <h1 class="text-left display-8 fs-4" className="textoPortafolio">{PortfolioTexto[0].texto} </h1>
  </div>
  );
}
export default Portfolio;
