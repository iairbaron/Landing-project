import React from "react";
import Formulario from "../../commons/form/Formulario";
import logoContacto from "../../../assets/sections/contact/LogoAzul.png"


const Contact = () => {
  return (
    <section style={{ margin: "0 9rem" }}>
      <div>
        <h1 style={{ padding: "2rem", fontSize: "3.2rem", }}>Contacto</h1>
        <div className="mapp-form"  style={{padding:"2rem", display:"flex", justifyContent:"space-between"}} >
        <div className="mappSection"  style={{width:"31.3vw", height:"300px",  border:"solid 1px black" }} >
        <img src={logoContacto} alt=""  />
        <p style={{ width:"92%", marginTop:"2%"}} >Av. Alicia Moreau de Justo 740 – Piso 3 Ofic.1 – ( C1107AAP )Puerto Madero – Dock 5 – Bs. As. – Argentinacontacto@bpsolutions.com.ar011-5235-5611</p>
        </div>
          <Formulario style={{ padding: "2rem" }} />{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
