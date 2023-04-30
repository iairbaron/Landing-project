import React from 'react';
import fotoPrincipal from '../../../assets/sections/banner/fotoPrincipal.png'
import Button from '../../commons/buttons/Button';

const Banner = () => {
  return (
    <section style={{width: '100%', height: '60vh', backgroundColor: '#2D2641',display:'flex', alignItems: 'center', margin: '0 0 3rem 0  '}}>
    <div style={{margin: '0 9rem'}}>
        <div style={{width:'40%',display:'flex',flexDirection:'column', gap:'2rem'}}>
            <h1 style={{color:'white'}}>Transformá tu negocio</h1>
            <p style={{color:'white'}}>Nuestros clientes reciben asesoramiento que los ayuda a tomar mejores decisiones en base a objetividad analítica, espíritu crítico y trabajo reflexivo.</p>
            <Button tipo='secondary' text='SERVICIOS'></Button>
        </div>
        <img src={fotoPrincipal} alt="" style={{position: 'absolute', top: '7rem', right: '9rem',width:'30%'}}/>
    </div>
    </section>
  )
}

export default Banner