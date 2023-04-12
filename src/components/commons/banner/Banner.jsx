import { Typography } from '@mui/material';
import React from 'react'
import bannerImg from "../../../media/banner/Group12.png";


import { Fredoka } from '@fontsource/fredoka';
import Button from '@mui/material/Button';


const Banner = () => {
  return (
    <>
    <div class="banner" style={{    
        width:"100%",
        backgroundImage:`url(${bannerImg})`,
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:"white"
    }}>
      <div style={{textAlign:"center"}}>
    <Typography style={{ fontFamily: 'Roboto', fontSize: '2rem' }}>Inscripción abierta</Typography>
    <Typography style={{ fontFamily: 'Fredoka', fontSize: '5rem', fontWeight:"bold" }}> CICLO LECT<span style={{fontFamily: 'Fredoka', fontSize: '5rem', fontWeight:"bold",letterSpacing:"2.0px"}}>I</span>VO 2023</Typography>
    <Button style={{borderRadius:"15px",padding:"1% 5%",fontSize:"1.5rem",marginTop:"2%", backgroundColor:"white", color:"rgb(99, 86, 184)",fontWeight:"bold" }} >¡Conoce mas !</Button>
    </div>
    </div>
    </>
  )
}

export default Banner