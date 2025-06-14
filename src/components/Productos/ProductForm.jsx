import React from 'react'

const ProductForm = ({
    Producto,
    setProducto,
    Precio,
    setPrecio,
    Stock,
    setStock,
    id,
    setId,
}) => {
  return (
    <form className="flex flex-col gap-4" /*onSubmit={handleSubmit}*/>
      <label className="flex gap-3">
        <span className="flex-1">Producto:</span>
        <input
          type="text"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
        //   value={Nombre}
        //   onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>

      <label className="flex gap-3">
        <span className="flex-1">Precio:</span>
        <input
          type="number"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
        //   value={Apellido}
        //   onChange={(e) => setApellido(e.target.value)}
          required
        />
      </label>

      <label className="flex gap-3">
        <span className="flex-1">Stock:</span>
        <input
          type="number"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
        //   value={Telefono}
        //   onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </label>

      <button className="bg-[#06002b] text-white rounded-2xl p-4" type="submit">
        Guardar
      </button>
    </form>
  )
}

export default ProductForm
