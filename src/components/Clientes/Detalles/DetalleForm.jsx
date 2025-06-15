import { useState, useEffect } from "react";
import { listarProductos } from "@/lib/listarProductos";
import {
  actualizarDetalleCliente,
  agregarDetalleCliente,
} from "@/lib/detalles";
import { convertToObject } from "typescript";

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
  setDetalles,
  id,
  edit,
  closeDialog,
}) => {
  const [productosBuscado, setProductosBuscado] = useState([]);

  // console.log(productosBuscado);

  listarProductos(setProductosBuscado);
  console.log(Producto)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const detalles = { Producto, Precio, Cantidad, Total, ClienteId };

    if (edit) {
      await actualizarDetalleCliente(id, detalles);
      setDetalles((prevDetalles) =>
        prevDetalles.map((d) =>
          d.id === detalles.id ? { ...d, ...detalles } : d
        )
      );
    } else {
      await agregarDetalleCliente(detalles);
      setDetalles((prevDetalles) => [
        ...prevDetalles,
        { id: Date.now(), ...detalles }, // Simulando un ID único
      ]);
    }
    closeDialog();
  };

  const handleProductoChange = (e) => {
    const productoId = e.target.value;

    // Buscar el producto seleccionado
    const productoSeleccionado = productosBuscado.find(
      (p) => p.id === productoId
    );

    if (productoSeleccionado) {
      setPrecio(productoSeleccionado.precio || 0);
      setProducto(productoSeleccionado.nombre);
    } else {
      setPrecio(0);
    }

    console.log(Producto);
  };

  // Actualizar el total automáticamente si precio o cantidad cambian
  useEffect(() => {
    const precioNum = parseFloat(Precio) || 0;
    const cantidadNum = parseInt(Cantidad) || 0;
    setTotal(precioNum * cantidadNum);
  }, [Precio, Cantidad]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex gap-3">
        <span className="flex-1">Producto:</span>
        <select
          name="Producto"
          value={Producto}
          onChange={(e) => handleProductoChange(e)}
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1 w-full"
        >
          <option value="" disabled>
            Seleccione un producto
          </option>
          {productosBuscado.map((producto) => (
            <option
              className="text-black"
              key={producto.id}
              value={producto.id}
            >
              {producto.nombre}
            </option>
          ))}
        </select>
      </label>

      <label className="flex gap-3">
        <span className="flex-1">Precio:</span>
        <input
          type="number"
          step={"any"}
          min={0}
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
          value={Precio}
          disabled
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
          disabled
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
