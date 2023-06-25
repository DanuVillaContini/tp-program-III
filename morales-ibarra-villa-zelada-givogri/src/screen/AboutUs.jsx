import MenuNavegacion from '../Componentes/MenuNavegacion';

import AvatarUno from "../Img/avatar1.png";
import AvatarDos from "../Img/avatar2.png";
import AvatarTres from "../Img/avatar3.png";
import AvatarCua from "../Img/avatar4.png";
import AvatarCin from "../Img/avatar5.png";

function AboutUs() {

    const arrayMiembrosGrupo = [
        { id: 1, nombre: 'Ignacio Ibarra', participacion: false, grupo: 5, avatar: AvatarTres },
        { id: 2, nombre: 'Agustin Givogri', participacion: false, grupo: 5, avatar: AvatarDos },
        { id: 3, nombre: 'Daniela Villa', participacion: true, grupo: 5, avatar: AvatarUno },
        { id: 4, nombre: 'Agustin Morales', participacion: true, grupo: 5, avatar: AvatarCua },
        { id: 5, nombre: 'Santiago Zelada ', participacion: true, grupo: 5, avatar: AvatarCin }
    ]


    return (
        <>
            <MenuNavegacion />
            <div className="text-center text-light bg-dark p-2"><h1>Equipo de Desarrollo:</h1></div>
            <div className="d-flex bg-dark justify-content-between wrapper-cards-aboutus">
                {
                    arrayMiembrosGrupo.map((miembro) => (
                        <div class="card-miembro m-1">
                            <div class="card-miembro-image"><img src={miembro.avatar} alt="" /></div>
                            <div class="card-miembro-description">
                                <p class="card-miembro-title text-center"> {miembro.nombre}</p>
                                <p class="card-miembro-body text-center">Grupo n°:  {miembro.grupo}</p>
                                <p class="card-miembro-title text-center" key={miembro.id}>Participacion 2°TP {" "} {miembro.participacion ? (<span>✔️</span>) : (<span>❌</span>)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default AboutUs