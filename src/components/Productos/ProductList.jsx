import React from 'react'

const ProductList = ({productos}) => {
  return (
    <table className="table-auto w-full text-center border-collapse">
      <thead className="bg-gray-200 text-black">
        <tr>
          <th className="p-2">Producto</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Stock</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td className="p-2">{producto.Producto}</td>
            <td className="p-2">{producto.Precio}</td>
            <td className="p-2">{producto.Stock}</td>
            <td className="flex justify-around p-2">
              <button onClick={() => {}}>Eliminar</button>
              <button onClick={() => {}}>Editar</button>
              <button>Detalles</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductList
