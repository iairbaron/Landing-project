import { Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div style={{width:"99vw",height:"8vh",backgroundColor:"rgba(82, 67, 178, 1)", display:"flex", justifyContent:"space-around",alignItems:"center" }}>
   <Typography style={{ fontFamily: 'Roboto', fontSize: '0.7rem', fontWeight: "initial", color: "white"}}>Instituto School </Typography>
   <Typography style={{ fontFamily: 'Roboto', fontSize: '0.7rem', fontWeight: "initial", color: "white"}}>Designed by: DUO </Typography>
    </div>
    </>
  )
}

export default Footer