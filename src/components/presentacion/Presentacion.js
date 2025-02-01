// import Button from '@mui/material/Button';
import imagenPerfil from '../../assets/Pictures/ProfileDJE.bmp';
import './Presentacion.css';
//import imagentest from 'https://es.pikbest.com/backgrounds/abstract-black-background-with-square-purple-and-blue-frame-luxury-futuristic-technology_1761876.html'

function  Presentacion() {
  return (
    <div>
      <table>
        <tr>
          <th className="divTexto">
                <h1 className="custom-text-white-presentacion">Hola , soy Diego Jara</h1>
                <h1 className="custom-text-white-presentacion">FullStack Developer</h1>
          </th> 
          <th  >
            <img className="divFotoPerfil" src={imagenPerfil} alt="My Image" />
          </th> 
        </tr> 
      </table>
    </div>
  );
}
export default Presentacion;
