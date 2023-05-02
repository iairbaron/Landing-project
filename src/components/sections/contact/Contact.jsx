import React from "react";
import Formulario from "../../commons/form/Formulario";
import logoContacto from "../../../assets/sections/contact/LogoAzul.png";

const Contact = () => {
  return (
    <section style={{ margin: "0 9rem" }}>
      <div>
        <h1 style={{ padding: "2rem", fontSize: "3.2rem" }}>Contacto</h1>
        <div
          className="mapp-form"
          style={{
            padding: "2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="mappSection"
            style={{
              width: "31.3vw",
              height: "400px"
            }}
          >
            <img src={logoContacto} alt="" />
            <p style={{ width: "92%"}}>
              Av. Alicia Moreau de Justo 740 – Piso 3 Ofic.1 – ( C1107AAP
              )Puerto Madero – Dock 5 – Bs. As. –
              Argentinacontacto@bpsolutions.com.ar011-5235-5611
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.989368020486!2d-58.39489092322605!3d-34.60443035753768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac198206de7%3A0x31a4c79ffb528624!2sAv.%20Corrientes%20%26%20Av.%20Callao%2C%20C1042%20CABA!5e0!3m2!1ses-419!2sar!4v1682988685315!5m2!1ses-419!2sar"
              style={{
                marginTop:"2%",
                border: "0",
                width: "75%",
                height: "75%",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Formulario style={{ padding: "2rem", marginTop:"300px"}} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
