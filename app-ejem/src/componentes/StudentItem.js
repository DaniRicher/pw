import react from "react"


const StudenItem = (propiedad)=>{
    return(
        <div>
            <h3>{propiedad.nombre}</h3>
            <span>{propiedad.programa}</span>
            <span>{propiedad.Semestre}</span>
        </div>
    );
}

export default StudenItem;