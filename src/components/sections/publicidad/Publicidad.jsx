import React from 'react'
import Button from '../../commons/buttons/Button'
import imagenFondo from '../../../assets/sections/publicidad/imagenfondo.png'

const Publicidad = () => {
  return (
    <section style={{margin: '0 9rem 3rem 9rem'}}>
    <div style={{display:'flex', justifyContent:'space-evenly',alignItems:'center',backgroundColor: '#2D2641', width:'100%', height:'40vh', overflow:'hidden', position:'relative'}}>
        <img src={imagenFondo} alt="" style={{position:'absolute', right: '-443px'}} />
        <h1 style={{color:'white',width:'40%'}}>Conoce todos nuestros proyectos</h1>
        <Button tipo='secondary' text='VER TRABAJOS'/>
    </div>
    </section>
  )
}

export default Publicidad