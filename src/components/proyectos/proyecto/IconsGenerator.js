
import React from 'react';
import '../../../styles/Proyectos.css';

function IconsGenerator(props) {
  function getPills() {
    return props.arrayIcons.map((icon, index) => (
      <span key={index} className="tech-pill">
        {icon.nombre}
      </span>
    ));
  }

  return (
    <div className="tech-pills-container">
      {getPills()}
    </div>
  );
}

export default IconsGenerator;
