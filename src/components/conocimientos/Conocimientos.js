import Tecnologias from './tecnologias/Tecnologias.js';



function Conocimientos() {
  return (
    <div class="container justify-content-center">
            <p class="h1 row justify-content-center" > 
                Conocimientos
            </p>

            <div class="container rounded col-6 rounded bg-transparent  text-dark " >
                  <table class="table table-transparent   justify-content-center " >
                      <thead class="thead-light"> 
                        <tr class="table-dark">
                          <th scope="col">#</th>
                          <th scope="col">Tecnología</th>
                          <th scope="col">Años</th>
                        </tr>
                      </thead>
                      <Tecnologias></Tecnologias>
                  </table>
            </div>
    </div>


  );
}
export default Conocimientos;
