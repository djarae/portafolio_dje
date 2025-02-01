import '../../styles/NavBar.css';

function NavBar() {
    return (
      <nav className="navbar">
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet"></link>
        <a href="#home"  className="custom-text-black">Home</a>
        <a href="#conocimientos"   className="custom-text-black">Conocimientos</a>
        <a href="#proyectos"  className="custom-text-black">Proyectos</a>
        <a href="#contacteme"   className="custom-text-black">Contacteme</a>
      </nav>
    );
  }
  export default NavBar;
  