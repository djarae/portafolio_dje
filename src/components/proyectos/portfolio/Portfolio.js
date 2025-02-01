import '../../../styles/Portfolio.css';
import PortfolioTexto from "../../../data/portfolio.json"

import iconoReact from '../../../assets/Icon/icons8-reaccionar.svg';
import iconoHtml from '../../../assets/Icon/iconoHtml.svg';
import iconoCss from '../../../assets/Icon/iconoCss.svg';
import iconoJS from '../../../assets/Icon/iconoJS.svg';
import iconoBootstrap from '../../../assets/Icon/iconoBootstrap.svg'

function Portfolio() {
  return (
  <div class="container  col-9  rounded bg-dark row justify-content-center"  >
    <p class="h1 row justify-content-center text-light"  style={{ fontSize: "2.9rem",fontStyle:"italic" }} >Portfolio</p>
    <h1 class="text-left display-8 fs-4" className="textoPortafolio">{PortfolioTexto[0].texto} </h1>
      <div class="justify-content-right d-inline-flex p-2" >
      <img  className="iconoTPortfolio" src={iconoReact}    />
      <img className="iconoTPortfolio" src={iconoHtml}  />
      <img className="iconoTPortfolio" src={iconoCss}/>
      <img className="iconoTPortfolio" src={iconoJS} />
      <img className="iconoTPortfolio" src={iconoBootstrap} />
      </div>
  </div>
  );
}
export default Portfolio;
