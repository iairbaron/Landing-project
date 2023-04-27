import React from "react";

function Formulario() {
  const inputStyle = {
    border: "none",
    borderBottom: "1px solid black",
    marginBottom: "1em",
    width: "30.35vw",
    padding: "0.5em",
    fontSize: "1em",
    
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        placeholder="Nombre"
        style={{
          ...inputStyle
        }}
      />
      <input
        type="text"
        placeholder="Apellido"
        style={{
          ...inputStyle,
        }}
      />
      <input
        type="email"
        placeholder="Email"
        style={{
          ...inputStyle,
        
        }}
      />
      <textarea
        placeholder="Consulta"
        style={{
          ...inputStyle,
        }}
      ></textarea>
      <button type="submit" style={{fontSize: "1em", width:"31.1vw", height:"5vh",   }}>
        Enviar
      </button>
    </form>
  );
}

export default Formulario;
