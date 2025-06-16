import { eliminarCliente } from "@/lib/firebaseService";

const ProductList = ({
  productos,
  setNombre,
  setPrecio,
  setStock,
  setId,
  refDialog,
  setEdit,
  refDialogDelete,
}) => {
  const openEditDialog = (producto) => {
    refDialog.current.showModal();
    setEdit(true);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
    setId(producto.id);
  };
  const openDialogDelete = (producto) => {
    refDialogDelete.current.showModal();
    setId(producto.id);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
  };
  return (
    <table className="table-auto w-full text-center border-collapse">
      <thead className="bg-gray-200 text-black">
        <tr className="hidden md:table-row">
          <th className="p-2">Producto</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Stock</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr
            key={producto.id}
            className="flex flex-col border m-5 rounded-2xl md:rounded-none md:m-0 border-gray-300 md:table-row"
          >
            <td className="p-2">
              <span className="md:hidden font-bold">Producto : </span>
              {producto.nombre}
            </td>
            <td className="p-2">
              <span className="md:hidden font-bold">Precio : </span>
              S/. {producto.precio}
            </td>
            <td className="p-2">
              <span className="md:hidden font-bold">Stock : </span>{" "}
              {producto.stock}
            </td>
            <td className="flex justify-around p-2">
              <button onClick={() => openDialogDelete(producto)}>
                Eliminar
              </button>
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
