import * as React from "react";

import MenuItem from '@mui/material/MenuItem';
import logo from "../../../media/header/LOGO.png";

function Header() {
  return (
    <>
      <header
        style={{
          zIndex: "950",
          position:"fixed",
          width: "100%",
          backgroundColor:"white",
          padding: "1% 5% 1%",
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
          <img
            src={logo}
          />
                <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
        <div style={{  display: "flex", gap: "62px", fontFamily: "Roboto", color:"rgba(82, 67, 178, 1)" }}>
          <MenuItem style={{ height: "60px",fontSize:"15px",fontWeight:"bold" }}>
            INICIAL
          </MenuItem>
             <MenuItem style={{ height: "60px", fontSize:"15px"  }}>
            PRIMARIA
          </MenuItem>
             <MenuItem style={{ height: "60px", fontSize:"15px"  }}>
            SECUNDARIA
          </MenuItem>
             <MenuItem style={{ height: "60px", fontSize:"15px"  }}>
            CONTACTO
          </MenuItem>
        </div>
      </div>
      </header>
    </>
  );
}

export default Header;
