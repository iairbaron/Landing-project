import React from 'react'
import Banner from '../../commons/banner/Banner'
import Contacto from '../../commons/contacto/Contacto'
import Header from '../../commons/header/Header'
import Levels from '../../commons/levels/Levels'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../commons/footer/Footer'
const Home = () => {
  return (
    <>
    <body style={{fontSize:"62.5%"}} >
    <Header/>
    <Banner/>
    <Levels/>
    <Contacto/>
    <Footer/>
    </body>
    </>
    
  )
}

export default Home