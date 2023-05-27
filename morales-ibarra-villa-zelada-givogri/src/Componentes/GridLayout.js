import ListaMiembros from "./ListaMiembros";
import TitleHeader from "./TitleHeader";
import MenuNavegacion from "./MenuNavegacion";
import SliderImg from "./SliderImg";
import Footer from "./Footer";
import CardMiembros from "./CardMiembros";



function Grid(){

    return(
    <div className="grid-layout">
        <div className="caja c1">
            <TitleHeader title="Sistema de Alumnos"/>
        </div>
        <div className="caja c2">
            <MenuNavegacion/>
            <SliderImg/>
        </div>
        <div className="caja c3">
            <ListaMiembros/>
        </div>
        <div className="caja c4">
            <CardMiembros/>
        </div>
        <div className="caja c5">
            <Footer/>
        </div>

    </div>
    )
}
export default Grid;