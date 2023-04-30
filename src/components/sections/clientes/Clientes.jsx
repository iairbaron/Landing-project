import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import linea from '../../../assets/sections/somosDiferentes/linea.png'
import client1 from '../../../assets/sections/clientes/client1.png'
import client2 from '../../../assets/sections/clientes/client2.png'
import client3 from '../../../assets/sections/clientes/client3.png'
import client4 from '../../../assets/sections/clientes/client4.png'
import client5 from '../../../assets/sections/clientes/client5.png'
import client6 from '../../../assets/sections/clientes/client6.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



const Diferentes = () => {
  return (
    <section style={{margin: '0 9rem 3rem 9rem'}}>
    <img src={linea} alt="" />
    <h1 style={{padding: '2rem 0'}}>Clientes</h1>
    <div style={{display:'flex',padding:'2rem 0', justifyContent:'space-between'}}>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={client1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={client6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </section>
      
  )
}

export default Diferentes