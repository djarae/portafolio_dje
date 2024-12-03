
import AcercaDeMiTexto from './AcercaDeMi.json'
import './acercademi.css';

function AcercaDeMi() {
  return (
        <div  class="panel panel-default"    className="divAcercaDeMi">
            <h1 className='h1TitutloAcercaDeMi' >
                Acerca De Mi
            </h1>
            <h1  className='h1ParrafoAcercaDeMi'>
              {AcercaDeMiTexto[0].texto}
            </h1>
        </div >
  );
}
export default AcercaDeMi;
