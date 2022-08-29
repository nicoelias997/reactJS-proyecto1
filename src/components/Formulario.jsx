import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState("")
    const [descripcion, setDescripcion] = React.useState("")
    const [lista, setLista] = React.useState([]) //para agregar las frutas y sus descrip en una lista

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

        setLista([
            ...lista,
            {fruta: fruta, descripcion: descripcion}
        ])

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
        <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.fruta} - {item.descripcion}
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}

export default Formulario