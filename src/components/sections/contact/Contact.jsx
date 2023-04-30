import React from "react";
import Formulario from "../../commons/form/Formulario";


const Contact = () => {
  return (
    <section style={{ margin: "0 9rem" }}>
      <div>
        <h1 style={{ padding: "2rem", fontSize: "3.2rem", }}>Contacto</h1>
        <div className="mapp-form"  style={{padding:"2rem", display:"flex", justifyContent:"space-around"}} >
        <div style={{width:"50%", height:"300px" , border:"solid 1px black"}} >

        </div  >
        <div style={{ padding: "2rem", width:"50%" }}>
          <Formulario  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
