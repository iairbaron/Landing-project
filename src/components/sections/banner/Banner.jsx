import React from 'react';
import fotoPrincipal from '../../../assets/sections/banner/fotoPrincipal.png'

const Banner = () => {
  return (
    <div style={{width: '100%', height: '40vh', backgroundColor: '#2D2641',display:'flex', alignItems: 'center'}}>
        <div style={{width:'40%'}}>
            <h1 style={{color:'white'}}>Transformá tu negocio</h1>
            <p style={{color:'white'}}>Nuestros clientes reciben asesoramiento que los ayuda a tomar mejores decisiones en base a objetividad analítica, espíritu crítico y trabajo reflexivo.</p>
            <button style={{color:'white'}}>SERVICIOS</button>
        </div>
        <div>
            {/* <img src={fotoPrincipal} alt="" /> */}
        </div>
    </div>
  )
}

export default Banner