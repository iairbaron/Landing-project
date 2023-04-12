import React from 'react'
import {Typography } from '@mui/material';
import card from "../../../media/contacto/card.png";
import ContactForm from './ContactForm';



const Contacto = () => {
  return (<>
        <div style={{display:"flex" ,justifyContent:'center'}}>
        <div style={{width:"50%",display:"flex",justifyContent:"center"}} >
          <img src={card} alt="" />
        </div>

         <div style={{width:"50%" ,display: "flex", justifyContent: "center",marginTop:"6vh" }}>
                <div>
                    <Typography style={{ fontFamily: 'Fredoka', fontSize: '4rem', fontWeight: "bold", color: "rgba(82, 67, 178, 1)", paddingBottom: "3%" }}>Padres felices  </Typography>
                    <Typography style={{ fontFamily: 'Roboto', fontSize: '1.2rem', fontWeight: "initial", color: "rgba(144, 144, 144, 1)", width: "85%" }}>Es os y transmitimos a nuestros alumnos los valores de solidaridad y compromiso. Todos los años desarrollamos campañas solidarias, incentivando a dar al prójimo aquello que necesite mediante donaciones. Se realizan entregas a distintas organizaciones e instituciones como el Hospital de niños </Typography>
                </div>
                
            </div>
            </div>
            <div style={{display:"flex", justifyContent:"center",paddingBottom:"5%",marginLeft:"5%",marginTop:"4%"}}>
            <ContactForm style={{margin:"auto"}}/>
            </div>
            </>
  )
}

export default Contacto