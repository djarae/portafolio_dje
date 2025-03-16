

import ConocimientosJson from '../../../data/tecnologias.json'
import '../../../styles/Tecnologias.css'

function Tecnologias() {
  function getTecnologias(){
    let tecnologias = [];
    for (let i=0;i<ConocimientosJson.length;i++){
      tecnologias.push(  
      <tr  class="table-secondary" >
        <td class="table-dark"><a className="custom-text-white">{ConocimientosJson[i].tecnologia}</a></td>
        <td  className="table-dark centrar-tecnologia" ><a  className="table-dark custom-text-white-tecnologias">{ConocimientosJson[i].anos}</a></td>
     </tr>)
    }
    return(
      tecnologias
    );
  }

  return (
    <tbody >
      {getTecnologias()}
    </tbody>
  );
}

export default Tecnologias;
