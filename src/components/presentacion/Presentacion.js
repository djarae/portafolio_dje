// import Button from '@mui/material/Button';
import imagenPerfil from '../../assets/Pictures/ProfileDJE.bmp';
import './Presentacion.css';


function Presentacion() {
  return (
    <table>
      <tr>
        <th className="divTexto">
              <h1 style={{ fontSize: "2.9rem",fontStyle:"italic" }}>Hola , soy Diego Jara</h1>
              <h1 style={{ fontSize: "2.9rem",fontStyle:"oblique"  }}>FullStack Developer</h1>
        </th> 
        <th  >
          <img className="divFotoPerfil" src={imagenPerfil} alt="My Image" />
        </th> 
      </tr> 
    </table>
  );
}
export default Presentacion;
