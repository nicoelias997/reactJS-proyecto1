import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial = [
        {id: 1, texto: "Tarea 1"},
        {id: 2, texto: "Tarea 2"},
        {id: 3, texto: "Tarea 3"}
    ]

    const [lista, setLista] = useState(estadoInicial);

    const agregarElementos = () =>{
        console.log("Me diste click")
        setLista([
            ...lista,
            {id:4, texto: "Tarea 4"}        
        ])
    }

  return (
    <div>
       <h2>Listas</h2>
        {
            lista.map( (item, index) => (
                <h4 key={index}>{item.texto}</h4>
            ))
        }
        <button onClick={() => agregarElementos()}>Agregar</button>
    </div>
  )
}

export default Listas