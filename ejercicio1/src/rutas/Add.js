
//import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react';
//import GridProduct from "../componentes/GridProduct"

export default function Add(){
    const nameInicial='nombre1';
    const [nombrevariable, nombremodificado]= useState (nameInicial);

    const accionEscribir = (e) =>{
        let valor = e.target.value;
        nombremodificado(valor);
    }
    return(
        <Row>
            <Col className="col py5 text-center border">
                <h1>Agregar</h1>
                <h1>Nombre: {nombrevariable}</h1>
                <span>Modificar nombre</span>
                <input value={nombrevariable} 
                onChange={accionEscribir} />
            </Col>
        </Row>
    );
}