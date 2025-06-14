import { forwardRef } from "react";
import closeDialogGeneral from "@/lib/closeDialog";
import ProductForm from "./ProductForm";

const ProductAdd = forwardRef(
  (
    {
      edit,
      producto,
      setProducto,
      precio,
      setPrecio,
      stock,
      setStock,
      id,
      setId,
    },
    ref
  ) => {
    closeDialogGeneral(ref);
    return (
      <dialog
        ref={ref}
        className="bg-white justify-self-center self-center rounded-2xl p-4 border-3 border-gray-400"
      >
        <header className="mb-5">
          <h2 className="text-2xl font-[900] text-center">
            {edit ? "Editar Producto" : "Agregar Producto"}
          </h2>
        </header>
        <ProductForm
          producto={producto}
          setProducto={setProducto}
          precio={precio}
          setPrecio={setPrecio}
          stock={stock}
          setStock={setStock}
          id={id}
          setId={setId}
        />
      </dialog>
    );
  }
);

export default ProductAdd;
