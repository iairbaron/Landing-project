import React from "react";

function Formulario() {
  const inputStyle = {
    border: "none",
    borderBottom: "2px solid black",
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
          ...inputStyle,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <input
        type="text"
        placeholder="Apellido"
        style={{
          ...inputStyle,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <input
        type="email"
        placeholder="Email"
        style={{
          ...inputStyle,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <textarea
        placeholder="Consulta"
        style={{
          ...inputStyle,
          borderBottomLeftRadius: "0.3em",
          borderBottomRightRadius: "0.3em",
          width: "80%",
        }}
      ></textarea>
      <button type="submit" style={{ fontSize: "1em", padding: "0.5em 1em" }}>
        Enviar
      </button>
    </form>
  );
}

export default Formulario;
