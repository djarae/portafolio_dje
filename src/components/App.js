const {
 withNativeWind: withNativeWind
} = require("nativewind/metro");

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Presentacion from './presentacion/Presentacion.js';
import Proyectos from './proyectos/Proyectos.js';
import Conocimientos from './conocimientos/Conocimientos.js';
import Contacteme from './contacteme/Contacteme.js';
import NavBar from './navbar/Navbar.js'
function App() {
  return (
    <div>
     <header className="App-header">
      <NavBar></NavBar>
     </header>
     <body className="App-body">
      <section className="sectionComponente" id="home"><Presentacion></Presentacion></section>
      <section className="sectionHeader" id="conocimientos"><Conocimientos></Conocimientos> </section>
      <section className="sectionHeader" id="proyectos"><Proyectos></Proyectos></section>
      <section className="sectionHeader" id="contacteme"><Contacteme></Contacteme></section>
     </body>
    </div>
  );//no merge
}
export default App;