
import React from 'react';
import Proyecto from './proyecto/Proyecto.js';
import '../../styles/Proyectos.css';
import ProyectosTxt from "../../data/proyectos.json";

function Proyectos() {
  return (
    <div className='divProyectos container'>
      <p className="titulo-proyecto">PROYECTOS</p>
      <div className="row justify-content-center">
        {ProyectosTxt.map((proyecto) => (
          <div key={proyecto.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div style={{ width: '100%', padding: '10px' }}>
              <Proyecto data={proyecto} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;