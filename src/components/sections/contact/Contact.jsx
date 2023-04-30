import React from "react";
import Formulario from "../../commons/form/Formulario";
import logoContacto from "../../../assets/sections/contact/LogoAzul.png"
import Map from "../../commons/map/Map.jsx";
import credentials from "../../../credentials";

const mapUrl= `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
const Contact = () => {
  return (
    <section style={{ margin: "0 9rem" }}>
      <div>
        <h1 style={{ padding: "2rem", fontSize: "3.2rem", }}>Contacto</h1>
        <div className="mapp-form"  style={{padding:"2rem", display:"flex", justifyContent:"space-between"}} >
        <div className="mappSection"  style={{width:"31.3vw", height:"300px",  border:"solid 1px black" }} >
        <img src={logoContacto} alt=""  />
        <p style={{ width:"92%", marginTop:"2%"}} >Av. Alicia Moreau de Justo 740 – Piso 3 Ofic.1 – ( C1107AAP )Puerto Madero – Dock 5 – Bs. As. – Argentinacontacto@bpsolutions.com.ar011-5235-5611</p>
        <Map 
         googleMapURL={mapUrl} 
         containerElement={<div style={{height: "400px "}} > </div>}
         mapElement= {<div style={{height:"100vh"}} > </div>  }        
         loadingElement= {<p>Cargadno </p>}
         />
        
        </div>
          <Formulario style={{ padding: "2rem" }} />{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
