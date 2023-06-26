import MenuNavegacion from "./MenuNavegacion";
import Footer from "./Footer";
import BgDefault from "./BgDefault";



function Grid() {

    return (
        <div className="grid-layout">
            <div className="caja c1">
                <MenuNavegacion />
            </div>
            <div className="caja c2">
                <BgDefault model="Y" motor="3-phaseAC" horsepower="1200" autopilot="Provided" />
            </div>
            <div className="caja c3">
                <BgDefault model="S" motor="Z-phaseBW" horsepower="1700" autopilot="Provided" />
            </div>
            <div className="caja c4">
                <BgDefault model="X" motor="3-enginatorAD" horsepower="960" autopilot="Provided" />
            </div>
            <div className="caja c5">
                <BgDefault model="SVZ" motor="9-BWayne" horsepower="830" autopilot="Provided" />
            </div>
            <div className="caja c6">
                <Footer />
            </div>

        </div>
    )
}
export default Grid;