import React from 'react';
import DiferentesCard from '../../commons/diferenteCards/DiferentesCard';
import icono1 from '../../../assets/sections/somosDiferentes/card1.png'
import icono2 from '../../../assets/sections/somosDiferentes/card2.png'
import icono3 from '../../../assets/sections/somosDiferentes/card3.png'

const Diferentes = () => {
  return (
    <div>
    <h1>Somos Diferentes</h1>
    <div style={{display:'flex',padding:'10px'}}>
      <DiferentesCard icono={icono1} name='Interaccion' text='En un entorno social donde cada vez es menos frecuente, nos apoyamos en la transparencia de nuestras ejecuciones.'/>
      <DiferentesCard icono={icono2} name='Transparencia' text='En un entorno social donde cada vez es menos frecuente, nos apoyamos en la transparencia de nuestras ejecuciones.'/>
      <DiferentesCard icono={icono3} name='Integral' text='En un entorno social donde cada vez es menos frecuente, nos apoyamos en la transparencia de nuestras ejecuciones.'/>
    </div>
    </div>
      
  )
}

export default Diferentes