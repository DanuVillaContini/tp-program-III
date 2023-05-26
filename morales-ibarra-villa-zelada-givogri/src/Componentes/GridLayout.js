import ListaMiembros from "../ListaMiembros";
// import ColumnMenu from "./ColumnMenu";
import MenuNavegacion from "./MenuNavegacion";
import SliderImg from "./SliderImg";
import TitleHeader from "./TitleHeader";



function Grid(){

    return(
    <div className="grid-layout">
        <div className="caja c1">
            <MenuNavegacion/>
            <TitleHeader title="Sistema de Alumnos"/>

        </div>
        <div className="caja c2">
            <SliderImg/>
        </div>
        <div className="caja c3">
            <ListaMiembros/>
        </div>
        <div className="caja c4">
            BARRA LATERAL
        </div>
        <div className="caja c5">
            FOOTER
        </div>

    </div>
    )
}
export default Grid;