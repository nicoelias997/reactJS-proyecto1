import React from 'react'

const Eventos = () => {
    const eventoClick = () => {
        console.log("Me diste un click")
    }
  return (
    <div>
        <hr />
        <h2>Eventos</h2>
        <button onClick={ () => eventoClick() }>click</button>
    </div>
  )
}

export default Eventos