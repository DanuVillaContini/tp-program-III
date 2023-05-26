import { Card, ListGroup} from 'react-bootstrap';
import './index.css'
// function Item({ nombre, miembros }) {
//   return miembros ? <li className="item">{nombre} ✔️</li> : <li>{nombre} ❌</li>;
// }

function ListaMiembros() {

  const listaMiembros = [
    {id:1, miembro:'Agustin Morales', pertenece: true},
    {id:1, miembro:'Daniela Villa', pertenece: true},
    {id:1, miembro:'Juan Roman Riquelme', pertenece: false},
    {id:1, miembro:'Santiago Zelada', pertenece: true},
    {id:1, miembro:'Alejandro Sanz', pertenece: false},
    {id:1, miembro:'Lucia Natalicio', pertenece: false},
    {id:1, miembro:'Ignacio Ibarra', pertenece: true},
    {id:1, miembro:'Agustin Givogri', pertenece: true},
  ]
  return (
    <>
    <Card className='m-3 bg-secondary' border="danger" style={{ width: '18rem' }}>
      <Card.Header className="text-center">
        <Card.Title>Listado de ALumnos:</Card.Title>
      </Card.Header>
      <ListGroup variant="flush">
          {
            listaMiembros.map((alumno) => (
              <ListGroup.Item key={alumno.id}>{alumno.miembro}{" "}{alumno.pertenece ? (<span>✔️</span>) : (<span>❌</span>)}</ListGroup.Item>
            ))
          }
        </ListGroup>
    </Card>
    </>


    // <div className="list">
    //   <h2>Lista de miembros</h2>
    //   <ul className="listaNazi">
    //     <Item miembros={true} nombre={"Agustin Morales"} />
    //     <Item miembros={true} nombre={"Daniela Villa"} />
    //     <Item miembros={false} nombre={"Juan Roman Riquelme"} />
    //     <Item miembros={true} nombre={"Santiago Zelada"} />
    //     <Item miembros={false} nombre={"Erling Braut Haaland"} />
    //     <Item miembros={true} nombre={"Ignacio Ibarra"} />
    //     <Item miembros={true} nombre={"Agustin Givogri"} />
    //     <Item miembros={false} nombre={"Alejandro Garnacho"} />

    //   </ul>
    // </div>
  );
}

export default ListaMiembros;