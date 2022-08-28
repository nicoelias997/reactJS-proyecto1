import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)

    const aumentar = () => {
        console.log("click")
        setContador(contador + 1)
    }

  return (
    <div>
        <hr />
        <h2>Contador</h2>
        <h3>Nuestro numero aumentando: {contador}</h3>
        <button onClick={() => aumentar()}>Aumentar</button>
    </div>
  )
}

export default Contador