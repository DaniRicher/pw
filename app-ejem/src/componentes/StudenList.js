import React from "react";
import StudenItem from "./StudentItem";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StudenList = ()=>{
    const students=[
    {id:1,nombre:'Daniel',programa:'Ing. de sistemas', Semestre: 5},
    {id:2,nombre:'Carlos',programa:'Ing. de Electronica', Semestre: 5},
    {id:3,nombre:'Camilo',programa:'Ing. de Sistemas', Semestre: 5},
    {id:4,nombre:'Esteban',programa:'Ing. de Industrial', Semestre: 5},
    {id:5,nombre:'Angie',programa:'Ing. de sistemas', Semestre: 5},
    {id:6,nombre:'Luz',programa:'Ing. de sistemas', Semestre: 5}
]
    const tuNombreFuncion = (nombre) =>{
        console.log(nombre);
    }
    return(
        <Row className="border">
            <Col>
            {students.map(s =>(
                <StudenItem key ={s.id} students={s} gato={tuNombreFuncion}/>
            ))
        }
        </Col>
        </Row>
    );
}

export default StudenList;