//import imagentest from 'https://es.pikbest.com/backgrounds/abstract-black-background-with-square-purple-and-blue-frame-luxury-futuristic-technology_1761876.html'
import imagenPerfil from '../../assets/Pictures/ProfileDJE.bmp';
import '../../styles/Presentacion.css';

function  Presentacion() {
  return (
    <div>
      <div className="divEncuadre">
        <h1 className="custom-text-white-presentacion">.</h1>
      </div>
      <div className="divTexto">
        <table>
          <tr>
            <th className="thTexto">
              <h1 className="custom-text-white-presentacion">Hola , soy Diego Jara</h1>
              <h1 className="custom-text-white-presentacion">FullStack Developer</h1>
            </th>
            <th>
            <img className="divFotoPerfil" src={imagenPerfil} alt="My Image" />
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Presentacion;
