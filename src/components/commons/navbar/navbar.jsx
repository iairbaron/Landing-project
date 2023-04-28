import React from 'react'
import logo from '../../../assets/sections/navbar/logo.png'
import Button from '../buttons/Button'

const Navbar = () => {
  return (
    <div style={{height: '10vh',position:'static',display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 9rem'}}>
            <img src={logo} alt="" />
            <ul style={{display:'flex',gap:'2rem', listStyle:'none', alignItems:'center', letterSpacing:'1.5px'}}>
                <li>INICIO</li>
                <li>CLIENTES</li>
                <li>CONTACTO</li>
                <li>SOBRE NOSOTROS</li>
                <Button tipo='primary' text='SERVICIOS'/>
            </ul>
    </div>
  )
}

export default Navbar