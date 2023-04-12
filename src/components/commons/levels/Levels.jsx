import { Typography } from '@mui/material';
import { Fredoka } from '@fontsource/fredoka';
import bannerImg from "../../../media/banner/Group12.png";
import foto from "../../../media/levels/fotos.png";
import fotoFrame from "../../../media/levels/Frame6.png";
import fotoInicial from "../../../media/levels/FrameInicial.png";
import fotoPrimario from "../../../media/levels/FramePrimario.png";
import fotoSecundario from "../../../media/levels/FrameSecundario.png";


const Levels = () => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly",marginTop:"6vh" }}>
                <div>
                    <Typography style={{ fontFamily: 'Fredoka', fontSize: '4rem', fontWeight: "bold", color: "rgba(82, 67, 178, 1)", paddingBottom: "5%" }}>Aprendé jugando </Typography>
                    <Typography style={{ fontFamily: 'Roboto', fontSize: '1.2rem', fontWeight: "initial", color: "rgba(144, 144, 144, 1)", width: "590px" }}>En el Campo de Deportes mas amplio de la zona sur, nuestros alumnos realizan actividad física.El Colegio Westminster y la Sociedad Alemana de Almirante Brown crearon un fuerte lazo de relación que se ve traducido en actividades conjuntas a lo largo de año como ser la colonia de verano que se desarrolla. </Typography>
                </div>
                <img src={foto} style={{  position: "relative ", zIndex: "900"}} />
            </div>
            <div style={{marginTop:"6vh",marginBottom:"6vh",display:"flex",alignItems:"center", justifyContent:"center", width:"100%",}} >
            <a href=""> <img src={fotoInicial} /></a>
            <a href=""> <img src={fotoPrimario} /></a>
            <a href=""> <img src={fotoSecundario} /></a>
            </div>
            <div class="divBanner" style={{width:"100%", height:"50vh", marginBottom:"100px",backgroundImage:`url(${fotoFrame})`,backgroundRepeat: "no-repeat",backgroundSize:"100% 100%" }}>
            </div>
        </>
    )
}

export default Levels