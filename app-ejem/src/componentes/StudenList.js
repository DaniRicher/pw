import React from "react";
import StudenItem from "./StudentItem";

const StudenList = ()=>{
    const students=[
    {id:1,nombre:'Daniel',programa:'Ing. de sistemas', Semestre: 5},
    {id:1,nombre:'Carlos',programa:'Ing. de Electronica', Semestre: 5},
    {id:1,nombre:'Camilo',programa:'Ing. de Sistemas', Semestre: 5},
    {id:1,nombre:'Esteban',programa:'Ing. de Industrial', Semestre: 5},
    {id:1,nombre:'Angie',programa:'Ing. de sistemas', Semestre: 5}
]
    return(
        <div>
            {students.map((s) =><StudenItem students={s}/>)
        }
        </div>
    );
}

export default StudenList;