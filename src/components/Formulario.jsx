import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState("")
    const [descripcion, setDescripcion] = React.useState("")

    const guardarDatos  = (e) => {
        e.preventDefault()
        if(!fruta.trim()){
            console.log("Esta vacia la fruta")
            return 
        }
        if(!fruta.trim()){
            console.log("Esta vacia la descripcion")
            return
        }

        console.log("procesando datos..." + fruta + descripcion)
        e.target.reset() //hace que los input se vacian
        setFruta("") //Sino, queda en el state de components
        setDescripcion("")
    }
  return (
    <div>
        Formulario
        <form onSubmit={guardarDatos}>
            <input type="text"
                placeholder='Ingrese fruta'
                className='form-control mb-2'
                onChange={e => setFruta(e.target.value)}
            />
            <input type="text"
                placeholder='Ingrese descripcion'
                className='form-control mb-2'
                onChange={e => setDescripcion(e.target.value)}
            />
            <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
        </form>
    </div>
  )
}

export default Formulario