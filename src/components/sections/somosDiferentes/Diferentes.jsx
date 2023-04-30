import React from 'react';
import DiferentesCard from '../../commons/diferenteCards/DiferentesCard';
import icono1 from '../../../assets/sections/somosDiferentes/card1.png'
import icono2 from '../../../assets/sections/somosDiferentes/card2.png'
import icono3 from '../../../assets/sections/somosDiferentes/card3.png'
import linea from '../../../assets/sections/somosDiferentes/linea.png'

const Diferentes = () => {
  return (
    <section style={{margin: '0 9rem 3rem 9rem'}}>
    <img src={linea} alt="" />
    <h1 style={{padding: '2rem 0'}}>Somos Diferentes</h1>
    <div style={{display:'flex',padding:'2rem 0', justifyContent:'space-between'}}>
      <DiferentesCard icono={icono1} name='Interaccion' text='En un entorno social donde cada vez es menos frecuente, nos apoyamos en la transparencia de nuestras ejecuciones.'/>
      <DiferentesCard icono={icono2} name='Transparencia' text='En un entorno social donde cada vez es menos frecuente, nos apoyamos en la transparencia de nuestras ejecuciones.'/>
      <DiferentesCard icono={icono3} name='Integral' text='En un entorno social donde cada vez es menos frecuente, nos apoyamos en la transparencia de nuestras ejecuciones.'/>
    </div>
    </section>
      
  )
}

export default Diferentes