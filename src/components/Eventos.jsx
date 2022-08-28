import React, { Fragment } from 'react'

const Eventos = () => {
    const eventoClick = () => {
        console.log("Me diste un click")
    }
  return (
        <>
        <hr />
        <h2>Eventos</h2>
        <button onClick={ () => eventoClick() }>click</button>
        </>
  )
}

export default Eventos