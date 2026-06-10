import React from 'react'

export const Formulario = ({ onNuevaTarea }) => {
    const handleSubmit = (event)=>{
        event.preventDefault()
        const titulo=event.target.titulo.value.trim()
        const description=event.target.descripcion.value.trim()
        const tarea = {
            id: Date.now(),
            titulo:titulo,
            descripcion: description
        }
        console.log(tarea)
        onNuevaTarea(tarea)
    } 
    return (
        <>
            <h2>LISTA DE TAREAS</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Titulo Tarea' name='titulo' id='titulo' />
                <input type='text' placeholder='Descripcion de la Tarea' name='descripcion' id='descripcion' />
                <input type="submit" value='Añadir' />
            </form>
        </>
    )
}
