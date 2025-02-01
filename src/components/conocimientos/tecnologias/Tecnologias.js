

import ConocimientosJson from '../../../data/tecnologias.json'
function Tecnologias() {
  function getTecnologias(){
    let tecnologias = [];
    for (let i=0;i<ConocimientosJson.length;i++){
      tecnologias.push(  
      <tr  class="table-secondary " >
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet"></link>
        <td class="table-dark"><a className="custom-text-white">{ConocimientosJson[i].tecnologia}</a></td>
        <td class="table-dark" ><a className="custom-text-white">{ConocimientosJson[i].anos}</a></td>
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
