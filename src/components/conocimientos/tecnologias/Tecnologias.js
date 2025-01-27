

import ConocimientosJson from '../../../data/tecnologias.json'

function Tecnologias() {

  function getTecnologias(){
    let tecnologias = [];
    for (let i=0;i<ConocimientosJson.length;i++){
      tecnologias.push(  
      <tr  class="table-secondary " >
        <td class="table-dark ">{ConocimientosJson[i].id}</td>
        <td class="table-dark ">{ConocimientosJson[i].tecnologia}</td>
        <td class="table-dark ">{ConocimientosJson[i].anos}</td>
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
