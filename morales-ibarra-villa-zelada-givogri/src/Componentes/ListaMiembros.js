import { Card, ListGroup} from 'react-bootstrap';

function ListaMiembros() {

  const listaMiembros = [
    {id:1, miembro:'Agustin Morales', pertenece: true},
    {id:2, miembro:'Daniela Villa', pertenece: true},
    {id:3, miembro:'Juan Roman Riquelme', pertenece: false},
    {id:4, miembro:'Santiago Zelada', pertenece: true},
    {id:5, miembro:'Alejandro Garnacho', pertenece: false},
    {id:6, miembro:'Lucia Natalicio', pertenece: false},
    {id:7, miembro:'Ignacio Ibarra', pertenece: true},
    {id:8, miembro:'Agustin Givogri', pertenece: true},
    {id:9, miembro:'Lionel Andres MESSI Cuccitini', pertenece: true},
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
    
  );
}

export default ListaMiembros;