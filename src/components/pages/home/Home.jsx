import React from 'react'
import Contact from '../../sections/contact/Contact'
import Diferentes from '../../sections/somosDiferentes/Diferentes'
import Banner from '../../sections/banner/Banner'
import Clientes from '../../sections/clientes/Clientes'
import Navbar from '../../commons/navbar/navbar'
import Publicidad from '../../sections/publicidad/Publicidad'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Diferentes/>
      <Clientes/>
      <Publicidad/>
      <Contact/>
    </div>
  )
}

export default Home