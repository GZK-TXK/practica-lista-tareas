import React, { useState } from 'react'
import { ToDo } from './ToDo'

export const ListaToDo = () => {
    const [tareas, setTareas] = useState([
        { titulo: "Tarea 1", descripcion: "Descripcion Tarea 1" },
        { titulo: "Tarea 2", descripcion: "Descripcion Tarea 2" },
        { titulo: "Tarea 3", descripcion: "Descripcion Tarea 3" },
        { titulo: "Tarea 4", descripcion: "Descripcion Tarea 4" },
        { titulo: "Tarea 5", descripcion: "Descripcion Tarea 5" }
    ])
    return (
        <div>
            <h3>Lista de tareas existentes hasta ahora</h3>
            {/* <pre>{JSON.stringify(tareas)}</pre> */}
            {
                tareas.map((tarea) => (
                    <>
                        <ToDo tarea={tarea} />
                    </>
                )
                )
            }
        </div>
    )
}