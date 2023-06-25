import MenuNavegacion from "./MenuNavegacion";
import Footer from "./Footer";


function Grid(){

    return(
    <div className="grid-layout">
        <div className="caja c1">

        </div>
        <div className="caja c2">
            <MenuNavegacion/>
        </div>
        <div className="caja c3">
        </div>
        <div className="caja c4">
        </div>
        <div className="caja c5">
            <Footer/>
        </div>

    </div>
    )
}
export default Grid;