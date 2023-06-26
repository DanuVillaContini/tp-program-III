
import React from "react";
import Button from 'react-bootstrap/Button';


function BgDefault(props) {

    return (
        <div class="contenedorAutos">
            <h2 className="tituloCar">MODEL {props.model}</h2>
            <div className="propertiesContainer">
                <h3> Engine: {props.motor} <br /> <br /> Horsepower: {props.horsepower} <br /><br /> Autopilot: {props.autopilot} </h3>
            </div>
            <Button className="btt-generico" variant="dark">BUY</Button>{' '}
        </div>
    )

}

export default BgDefault