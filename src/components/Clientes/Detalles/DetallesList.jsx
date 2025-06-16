import React from "react";

const DetallesList = ({ detalles, refEditDialog, setEdit, setId, setProducto, setPrecio, setCantidad, setTotal }) => {

  const openDialogEdit = (detalle) => {
    refEditDialog.current.showModal();
    setEdit(true);
    setId(detalle.id);
    setProducto(detalle.Producto);
    setPrecio(detalle.Precio);
    setCantidad(detalle.Cantidad);
    setTotal(detalle.Total);
  }
  return (
    <table className="table-auto w-full text-center border-collapse">
      <thead className="bg-gray-200 text-black">
        <tr>
          <th>id</th>
          <th className="p-2">Producto</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Cantidad</th>
          <th className="p-2">Total</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {detalles.map((detalle) => (
          <tr key={detalle.id}>
            <td className="p-2">{detalle.id}</td>
            <td className="p-2">{detalle.Producto}</td>
            <td className="p-2">{detalle.Precio}</td>
            <td className="p-2">{detalle.Cantidad}</td>
            <td className="p-2">{detalle.Total}</td>
            <td className="flex justify-around p-2">
              <button onClick={() => {}}>Eliminar</button>
              <button onClick={() => openDialogEdit(detalle)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetallesList;
