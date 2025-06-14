import React from "react";

const DetalleForm = ({
  Producto,
  setProducto,
  Precio,
  setPrecio,
  Cantidad,
  setCantidad,
  Total,
  setTotal,
  ClienteId,
}) => {
  return (
    <form className="flex flex-col gap-4" /*onSubmit={handleSubmit}*/>
      <label className="flex gap-3">
        <span className="flex-1">Producto:</span>
        <input
          type="text"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
          value={Producto}
          onChange={(e) => setProducto(e.target.value)}
          required
        />
      </label>

      <label className="flex gap-3">
        <span className="flex-1">Precio:</span>
        <input
          type="number"
          step={"any"}
          min={0}
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
          value={Precio}
          onChange={(e) => setPrecio(e.target.value)}
          readOnly
          required
        />
      </label>

      <label className="flex gap-3">
        <span className="flex-1">Cantidad:</span>
        <input
          type="number"
          min={0}
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
          value={Cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
      </label>

        <label className="flex gap-3">
            <span className="flex-1">Total:</span>
            <input
            type="number"
            step={"any"}
            min={0}
            className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
            value={Total}
            onChange={(e) => setTotal(e.target.value)}
            readOnly
            required
            />
        </label>

      <button className="bg-[#06002b] text-white rounded-2xl p-4" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default DetalleForm;
