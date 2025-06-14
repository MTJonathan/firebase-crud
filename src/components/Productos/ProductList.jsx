import React from "react";

const ProductList = ({
  productos,
  setNombre,
  setPrecio,
  setStock,
  setId,
  refDialog,
  setEdit
}) => {

  const openEditDialog = (producto) => {
    refDialog.current.showModal();
    setEdit(true);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
    setId(producto.id);
  }
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
            <td className="p-2">{producto.nombre}</td>
            <td className="p-2">{producto.precio}</td>
            <td className="p-2">{producto.stock}</td>
            <td className="flex justify-around p-2">
              <button onClick={() => {}}>Eliminar</button>
              <button onClick={() => openEditDialog(producto)}>Editar</button>
              <button>Detalles</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
