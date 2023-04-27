import React from "react";
import Button from '@mui/material/Button';




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
      <input
        placeholder="Consulta"
        style={{
          ...inputStyle,
        }}
      ></input>
      <Button variant="outlined" size="small" style={{color:"black", border:"solid 1px black ",fontSize: "1em", width:"31.1vw", height:"5vh" }}>
          Enviar
        </Button>

    </form>
  );
}

export default Formulario;
