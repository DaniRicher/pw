import {Row,Col} from 'react-bootstrap'
import React, { useState } from 'react';
//import GridProduct from '../componentes/GridProduct';


export default function Add(props){
    const estadoinicialform = {
        nombre:'',
        Precio:''
    };

    const [estadoForm,cambiarestadoForm]= useState(estadoinicialform);

    const gestionarCampForms= event=>{
        //const nameInput = event.target.nombre;
        //const valueInput = event.targe.value;
        const {name, value}= event.target;
        cambiarestadoForm({...estadoForm,[name]:value});
    }
    const onSubmitForm=ev =>{

        ev.preventDefault();
        console.log(estadoForm)
        props.agregar(estadoForm);
        cambiarestadoForm(estadoinicialform);
    }
    return(
        <Row>
            <Col className="col py5 text-center">
                <h1>Agregar productos</h1>
            </Col>
            <form onSubmit={onSubmitForm}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input type="text" name="nombre"className="form-control" id="nombreproduct" placeholder="Nombre"value={estadoForm.nombre} onChange={gestionarCampForms}/>
            </div>
            <div className="mb-3">
                <label htmlFor="Precio" className="form-label">Precio:</label>
                <input type="text" name="Precio"className="form-control" id="PrecioProduc" placeholder="Precio"value={estadoForm.Precio} onChange={gestionarCampForms}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Agregar</button>
            </div>
        </form>
        </Row>
    );
}