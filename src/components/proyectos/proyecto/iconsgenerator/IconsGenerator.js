
import '../../../../styles/Proyectos.css'
//Iconos:
import iconoReact from '../../../../assets/Icon/icons8-reaccionar.svg';
import iconoHtml from '../../../../assets/Icon/iconoHtml.svg';
import iconoCss from '../../../../assets/Icon/iconoCss.svg';
import iconoJS from '../../../../assets/Icon/iconoJS.svg';
import iconoBootstrap from '../../../../assets/Icon/iconoBootstrap.svg'
function IconsGenerator(props) {
  function getIconos(){
    let iconos = [];
    for (let i=0;i<props.arrayIcons.length;i++){
        if (props.arrayIcons[i].nombre==="React"){iconos.push(<img  className="iconoTPortfolio" src={iconoReact}/>)}
        if (props.arrayIcons[i].nombre==="Html"){iconos.push(<img  className="iconoTPortfolio" src={iconoHtml}/>)}
        if (props.arrayIcons[i].nombre==="Css"){iconos.push(<img  className="iconoTPortfolio" src={iconoCss}/>)}
        if (props.arrayIcons[i].nombre==="Bootstrap"){iconos.push(<img  className="iconoTPortfolio" src={iconoBootstrap}/>)}
        if (props.arrayIcons[i].nombre==="JS"){iconos.push(<img  className="iconoTPortfolio" src={iconoJS}/>)}
      }
    return(iconos);
  }
  return (
    <div class="justify-content-right d-inline-flex p-2" >
      {getIconos()}
    </div>
  );
}
export default IconsGenerator;
