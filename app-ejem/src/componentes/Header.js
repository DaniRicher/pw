import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header =()=>{
    return(
        <Row >
            <Col className="col py5 text-center border">
                <h1>Gestión de estudiantes</h1>
                <span>Crear/Consultar/Actualizar/Eliminar</span>
            </Col>
        </Row>
    );
}

export default Header;