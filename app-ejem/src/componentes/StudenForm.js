import React from 'react'

export default function StudenForm(props){
    return(
        <form onSubmit={props.agregar}>
            <div class="mb-3">
                <label htmlfor="Nombre" className="form-label">Nombre</label>
                <input type="text" class="form-control" id="Nombre" placeholder="Nombre"/>
            </div>
            <div class="mb-3">
                <label htmlfor="Precop" className="form-label">Carrera</label>
                <input type="text" class="form-control" id="Precio" placeholder="Carrera"/>
            </div>
            <div class="mb-3">
                <label htmlfor="Precop" className="form-label">Semestre</label>
                <input type="text" class="form-control" id="Precio" placeholder="Semestre"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    );
}