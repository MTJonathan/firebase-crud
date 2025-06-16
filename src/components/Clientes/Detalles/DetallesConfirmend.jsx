import { forwardRef } from "react";
import closeDialogGeneral from "@/lib/closeDialog";

const DetallesConfirmed = forwardRef(({ edit, Producto }, ref) => {
  closeDialogGeneral(ref);

  const closeDialog = () => {
    ref.current.close();
  };
  return (
    <dialog
      ref={ref}
      className="bg-white justify-self-center self-center rounded-2xl p-6 border-3 border-gray-400 text-center"
    >
      <h1 className="text-2xl font-[900]">
        {edit ? "Deuda Actualizada" : "Deuda Agregada"}
      </h1>

      <p className="my-4">
        La Deuda de <span className="font-bold">{Producto}</span> se ha{" "}
        <span className="font-bold">{edit ? "actualizado" : "agregado"}</span>{" "}
        con exito
      </p>

      <button
        onClick={closeDialog}
        className="border-2 border-gray-400 bg-[#06002b] text-white rounded-2xl py-2 px-10"
      >
        Aceptar
      </button>
    </dialog>
  );
});

export default DetallesConfirmed;
