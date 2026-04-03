

import ConocimientosJson from '../../../data/tecnologias.json'
import '../../../styles/Tecnologias.css'

function Tecnologias() {
  function getTecnologias(){
    let tecnologias = [];
    for (let i=0;i<ConocimientosJson.length;i++){
      tecnologias.push(  
      <tr  className="table-secondary" >
        <td className="table-dark"><span className="custom-text-white">{ConocimientosJson[i].tecnologia}</span></td>
        <td  className="table-dark centrar-tecnologia" ><span  className="table-dark custom-text-white-tecnologias">{ConocimientosJson[i].anos}</span></td>
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
