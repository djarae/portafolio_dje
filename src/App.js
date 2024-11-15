import logo from './logo.svg';
import './App.css';

//Imports externos
import 'bootstrap/dist/css/bootstrap.css';

// import AcercaDeMi from 'components/acercademi/AcercaDeMi.js';
import AcercaDeMi from './components/acercademi/AcercaDeMi.js'
import Conocimientos from './components/conocimientos/Conocimientos.js';
import Presentacion from './components/presentacion/Presentacion.js';
import MisProyectos from './components/misproyectos/MisProyectos.js';
import Espacios from './components/espacios/Espacios.js';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <body className=" App-body"> 
         <Presentacion></Presentacion>
         <Espacios></Espacios>
         <AcercaDeMi></AcercaDeMi>
         <Espacios></Espacios>
         <Conocimientos></Conocimientos>
         <Espacios></Espacios>
       






         <MisProyectos></MisProyectos>
      </body>
    </div>
  );
}

export default App;
