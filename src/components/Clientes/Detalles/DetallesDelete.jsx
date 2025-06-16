import { forwardRef } from "react";
import closeDialogGeneral from "@/lib/closeDialog";

const DetallesDelete = forwardRef(({ Producto }, ref) => {
  closeDialogGeneral(ref);
  const closeDialog = () => {
    ref.current.close();
  }
  return (
    <dialog
      ref={ref}
      className="bg-white justify-self-center self-center rounded-2xl p-6 border-3 border-gray-400 text-center"
    >
      <h1 className="text-2xl font-[900]">Producto eliminado</h1>
      <p className="my-4">
        El producto{" "}
        <span className="font-[900] text-lg text-red-500">{Producto}</span> ha
        sido eliminado correctamente.
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

export default DetallesDelete;