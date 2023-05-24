import React from "react";
import './index.css'
function Item({ nombre, miembros }) {
  return miembros ? <li className="item">{nombre} ✔️</li> : <li>{nombre} ❌</li>;
}

function ListaMiembros() {
  return (<body>
    <div className="list">
      <h2>Lista de miembros</h2>
      <ul class="listaNazi">
        <Item miembros={true} nombre={"Agustin Morales"} />
        <Item miembros={true} nombre={"Daniela Villa"} />
        <Item miembros={false} nombre={"Juan Roman Riquelme"} />
        <Item miembros={true} nombre={"Santiago Zelada"} />
        <Item miembros={false} nombre={"Erling Braut Haaland"} />
        <Item miembros={true} nombre={"Ignacio Ibarra"} />
        <Item miembros={true} nombre={"Agustin Givogri"} />
        <Item miembros={false} nombre={"Alejandro Garnacho"} />
        
        
        
       

      </ul>
    </div>
    </body>
  );
}

export default ListaMiembros;