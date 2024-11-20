// import Button from '@mui/material/Button';
import imagenPerfil from './ProfileDJE.bmp';


function Presentacion() {
  return (
    <table>
      <tr>
        <th className="divTexto">
              <h1 style={{ fontSize: "2.9rem",fontStyle:"italic" }}>Hola , soy Diego Jara</h1>
              <h1 style={{ fontSize: "2.9rem",fontStyle:"oblique"  }}>FullStack Developer</h1>
        </th> 
        <th  className="divFotoPerfil"><h1 style={{color: "#07022c" }}>............................</h1> </th> 
        <th  className="divFotoPerfil">
          <h1 style={{color: "#07022c" }}>...............</h1>
          <img src={imagenPerfil} alt="My Image" />
        </th> 
      </tr> 
    </table>
  );
}
export default Presentacion;
