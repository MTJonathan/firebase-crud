import { forwardRef } from "react";
import DetalleForm from "./DetalleForm";
import closeDialogGeneral from "@/lib/closeDialog";

const DetallesDialog = forwardRef(
  (
    {
      edit,
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
      openDialogConfirmed,
      Fecha,
      setFecha,
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
            {edit ? "Editar Deuda" : "Agregar Deuda"}
          </h2>
        </header>
        <DetalleForm
          Producto={Producto}
          setProducto={setProducto}
          Precio={Precio}
          setPrecio={setPrecio}
          Cantidad={Cantidad}
          setCantidad={setCantidad}
          Total={Total}
          setTotal={setTotal}
          ClienteId={ClienteId}
          setDetalles={setDetalles}
          edit={edit}
          id={id}
          closeDialog={closeDialog}
          openDialogConfirmed={openDialogConfirmed}
          Fecha={Fecha}
          setFecha={setFecha}
        />
      </dialog>
    );
  }
);

export default DetallesDialog;
