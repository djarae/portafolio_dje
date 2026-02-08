import React from 'react';
import IconsGenerator from './IconsGenerator';

// Images (Static imports to work with webpack)
import imgGastos from '../../../assets/proyectos/1_Gastos.png';
import imgFPG from '../../../assets/proyectos/2_FPG.png';
import imgCovers from '../../../assets/proyectos/3_CoversShowcase.png';

// Map images by ID or name
const images = {
  0: imgGastos,
  1: imgFPG,
  2: imgCovers
};

function Proyecto({ data }) {
  // Fallback to placeholder if image load fails implies avoiding crash, but import guarantees path.
  // Actually, standard import returns the path.

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={images[data.id]}
          alt={data.titulo}
          className="project-image"
        />
      </div>

      <h3 className="tituloPortafolio">{data.titulo}</h3>
      <p className="textoPortafolio">{data.texto}</p>

      <IconsGenerator arrayIcons={data.iconos} />

      <a href={data.link} className="visit-btn">
        visit &rarr;
      </a>
    </div>
  );
}

export default Proyecto;
