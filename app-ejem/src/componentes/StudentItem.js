import react from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../css/misestilos.css'
const StudenItem = (props)=>{
    const{nombre,programa,Semestre}=props.students;
    return(
        <div className="item">
        <Row>
            <Col md={1} sm={1}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" className="avatar"/>
            </Col>
            <Col md={8} sm={8}>
                <h5>{nombre}</h5>
                <p>{programa}</p>
                <p className="text-muted">{Semestre}</p>
                </Col>
                <Col md={3} sm={3}>
                <Button variant="primary" size="sm" onClick={props.funcion(nombre)
                    }>Ver detalles </Button>
                </Col>
        </Row>
        </div>  
    );
}

export default StudenItem;