import React from 'react'
import Contact from '../../sections/contact/Contact'
import Diferentes from '../../sections/somosDiferentes/Diferentes'
import Banner from '../../sections/banner/Banner'
import Navbar from '../../commons/navbar/navbar'
import Publicidad from '../../sections/publicidad/Publicidad'
import Clientes from "../../sections/clientes/Clientes"

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