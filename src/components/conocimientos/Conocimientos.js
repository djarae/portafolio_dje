import Tecnologias from './tecnologias/Tecnologias.js';


function Conocimientos() {
  return (
    <div class="container justify-content-center">
      <p className="custom-text-white-titulo" > 
       Conocimientos
      </p>
      <div className="divTblConocimientos">
        <div  className="divTblConocimientos" class="container rounded col-6 rounded bg-transparent  text-dark " >
          <table class="table table-transparent justify-content-center" >
            <thead class="thead-light"> 
              <tr class="table-dark">
                <th scope="col" className="custom-text-white">Tecnología</th>
                <th scope="col" className="custom-text-white">Años</th>
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
