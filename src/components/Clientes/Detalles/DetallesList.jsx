import React from "react";

const DetallesList = ({ detalles }) => {
  return (
    <table className="table-auto w-full text-center border-collapse">
      <thead className="bg-gray-200 text-black">
        <tr>
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
            <td className="p-2">{detalle.Producto}</td>
            <td className="p-2">{detalle.Precio}</td>
            <td className="p-2">{detalle.Cantidad}</td>
            <td className="p-2">{detalle.Total}</td>
            <td className="flex justify-around p-2">
              <button onClick={() => {}}>Eliminar</button>
              <button onClick={() => {}}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetallesList;
