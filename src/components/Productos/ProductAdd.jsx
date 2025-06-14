import { forwardRef } from "react";
import closeDialogGeneral from "@/lib/closeDialog";
import ProductForm from "./ProductForm";

const ProductAdd = forwardRef(
  (
    {
      edit,
      nombre,
      setNombre,
      precio,
      setPrecio,
      stock,
      setStock,
      id,
      setId,
      setProductos
    },
    ref
  ) => {
    closeDialogGeneral(ref);

    const closeDialog = () => {
      if (ref.current) {
        ref.current.close();
      }
    };
    
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
          nombre={nombre}
          setNombre={setNombre}
          precio={precio}
          setPrecio={setPrecio}
          stock={stock}
          setStock={setStock}
          id={id}
          setId={setId}
          edit={edit}
          closeDialog={closeDialog}
          setProductos={setProductos}
        />
      </dialog>
    );
  }
);

export default ProductAdd;
