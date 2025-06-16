import React from "react";

const DetallesList = ({
  detalles,
  refEditDialog,
  refDeleteDialog,
  setEdit,
  setId,
  setProducto,
  setPrecio,
  setCantidad,
  setTotal,
}) => {
  const openDialogEdit = (detalle) => {
    refEditDialog.current.showModal();
    setEdit(true);
    setId(detalle.id);
    setProducto(detalle.Producto);
    setPrecio(detalle.Precio);
    setCantidad(detalle.Cantidad);
    setTotal(detalle.Total);
  };
  const openDialogDelete = (detalle) => {
    refDeleteDialog.current.showModal();
    setId(detalle.id);
    setProducto(detalle.Producto);
    setPrecio(detalle.Precio);
    setCantidad(detalle.Cantidad);
    setTotal(detalle.Total);
  };
  return (
    <table className="table-auto w-full text-center border-collapse">
      <thead className="bg-gray-200 text-black">
        <tr className="hidden md:table-row">
          <th className="p-2">Producto</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Cantidad</th>
          <th className="p-2">Total</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {detalles.map((detalle) => (
          <tr
            key={detalle.id}
            className="flex flex-col border m-5 rounded-2xl md:rounded-none md:m-0 border-gray-300 md:table-row"
          >
            <td className="p-2">
              <span className="md:hidden font-bold">Producto : </span>{" "}
              {detalle.Producto}
            </td>
            <td className="p-2">
              <span className="md:hidden font-bold">Precio : </span>
              S/. {detalle.Precio}
            </td>
            <td className="p-2">
              <span className="md:hidden font-bold">Cantidad : </span>
              {detalle.Cantidad}
            </td>
            <td className="p-2">
              <span className="md:hidden font-bold">Total : </span>
              S/. {detalle.Total}
            </td>
            <td className="flex justify-around p-2">
              <button onClick={() => openDialogDelete(detalle)}>
                Eliminar
              </button>
              <button onClick={() => openDialogEdit(detalle)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetallesList;
