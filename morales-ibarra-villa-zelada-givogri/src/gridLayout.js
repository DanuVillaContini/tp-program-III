import ListaMiembros from "./lista";



function Grid(){
    return(
        <body>
    
    <div class="grid-layout">
        <div class="caja c1">
            <h1>ALUMNOS</h1>

        </div>
        <div class="caja c2">
            MENU
        </div>
        <div class="caja c3">
            <ListaMiembros/>
        </div>
        <div class="caja c4">
            BARRA LATERAL
        </div>
        <div class="caja c5">
            FOOTER
        </div>

    </div>
</body>
    )
}
export default Grid;