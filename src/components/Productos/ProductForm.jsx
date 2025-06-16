import { agregarProducto, actualizarProducto } from "@/lib/productos";

const ProductForm = ({
  edit,
  nombre,
  setNombre,
  precio,
  setPrecio,
  stock,
  setStock,
  id,
  setId,
  closeDialog,
  setProductos,
  openDialogConfirmed,
}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProducto = { nombre, precio, stock };

    if (edit) {
      await actualizarProducto(id, nuevoProducto);
      setProductos((prevProductos) =>
        prevProductos.map((c) => (c.id === id ? { ...c, ...nuevoProducto } : c))
      );
    } else {
      const nuevo = await agregarProducto(nuevoProducto);
      setProductos((prevProductos) => [
        ...prevProductos,
        { id: nuevo.id, ...nuevoProducto },
      ]);
    }

    closeDialog();
    openDialogConfirmed();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex flex-wrap gap-3 justify-center text-center">
        <span className="flex-1">Nombre:</span>
        <input
          type="text"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>

      <label className="flex flex-wrap gap-3 justify-center text-center">
        <span className="flex-1">Precio:</span>
        <input
          type="number"
          step="any"
          min={0}
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </label>

      <label className="flex flex-wrap gap-3 justify-center text-center">
        <span className="flex-1">Stock:</span>
        <input
          type="number"
          min={0}
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
      </label>

      <button className="bg-[#06002b] text-white rounded-2xl p-4" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default ProductForm;
