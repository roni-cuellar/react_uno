import React from 'react'
import './Seccion_dos.css'
import Aside from '../../components/Aside/Aside'

function Seccion_dos() {
    return (
        <div className='seccion'>
            <div className='parrafo'>
                <h1>Es mas facil con REACT</h1>
                <br/>
                <p>React se vuelve más fácil porque organiza mejor el proyecto y permite reutilizar componentes. En lugar de repetir el mismo código varias veces, podés crear un componente una sola vez, como un navbar, una card o un botón, y usarlo donde necesité
                <br/><br/>             
                También facilita manejar páginas dinámicas, actualizar información en tiempo real y dividir la aplicación por partes para que el código quede más limpio y entendible. Además, como React trabaja junto con JavaScript, podés controlar mejor la lógica y la interacción de la interfaz.</p>
            </div>

            <Aside/>

        </div>
    )
}

export default Seccion_dos
