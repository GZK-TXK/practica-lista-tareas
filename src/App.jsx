import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Formulario } from './components/Formulario'
import { ListaToDo } from './components/ListaToDo'

function App() {
  const [tareas, setTareas]=useState([])
  const onNuevaTarea = (tarea)=>{
    if (!tareas.includes(tarea)){
      setTareas([...tareas, tarea])
    }
    setTareas([...tareas])
  }
  return (
    <>
      <header></header>
      <main>
        <Formulario />
        <ListaToDo />
      </main>
      <footer></footer>
    </>
  )
}

export default App
