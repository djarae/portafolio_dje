
import Tecnologias from './tecnologias/Tecnologias.js';
import  '../../styles/Conocimientos.css'

function Conocimientos() {
  return (
    <div  className="divTblConocimientos" class="container justify-content-center">
      <p className="custom-text-white-titulo" > 
       Conocimientos
      </p>
      <div className="divTblConocimientos">
        <div class="container rounded col-6 rounded bg-transparent  text-dark " >
          <table class="table table-transparent justify-content-center" >
            <thead class="thead-light"> 
              <tr class="table-dark">
                <th  className="custom-text-tecnologia">Tecnología</th>
                <th  className="custom-text-anos">Años</th>
              </tr>
            </thead>
          <Tecnologias></Tecnologias>
          </table>
        </div>
      </div>
    </div>


  );
}
export default Conocimientos;