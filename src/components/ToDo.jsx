
// tarea = { titulo, descripcion }

export const ToDo = ({ tarea }) => {

    return (
        <div>
            <h3>{tarea.titulo}</h3>
            <h3>{tarea.description}</h3>
        </div>
    )
}