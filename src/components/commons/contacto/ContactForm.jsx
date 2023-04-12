import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const ContactForm = () => {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <Typography
                    variant="h1"
                    style={{ fontFamily: 'Fredoka', fontSize: '3rem', fontWeight: "bold", color: "rgba(82, 67, 178, 1)", paddingBottom: "2%", }}>
                    Contactanos
                </Typography>
                <div style={{ display: "flex", gap: "2%", width: "81.5%" }}>
                    <TextField
                        id="outlined-basic"
                        label="Nombre"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Apellido"
                    />
                </div>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    style={{ width: "81.5%" }}
                />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={8}
                    label="Escriba su mensaje"
                    style={{ width: "81.5%" }}
                />
                <Button variant="contained"  disableElevation style={{backgroundColor:"rgba(82, 67, 178, 1)" ,width: "82%" }}>
                    Enviar
                </Button>
            </Box>
        </>
    )
}

export default ContactForm;
