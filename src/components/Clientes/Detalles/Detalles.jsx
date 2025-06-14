import React from 'react'

const DetallesIndex = ({cliente}) => {
  return (
    <div>
      <header className="m-5">
        <h1 className="text-2xl font-[900]">Detalles : {cliente.Nombre}</h1>
        <p>{cliente.Apellido}</p>
        <p>{cliente.Telefono}</p>
        <p>{cliente.id}</p>
      </header>
    </div>
  )
}

export default DetallesIndex
