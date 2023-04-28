import React from 'react'
import Contact from '../../sections/contact/Contact'
import Diferentes from '../../sections/somosDiferentes/Diferentes'
import Banner from '../../sections/banner/Banner'
import Navbar from '../../commons/navbar/navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Diferentes/>
      <Contact/>
    </div>
  )
}

export default Home