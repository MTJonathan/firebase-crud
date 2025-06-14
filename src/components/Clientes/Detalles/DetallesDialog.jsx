import { forwardRef } from "react";
import DetalleForm from "./DetalleForm";
import closeDialogGeneral from "@/lib/closeDialog";

const DetallesDialog = forwardRef(({ edit }, ref) => {
  closeDialogGeneral(ref);
  return (
    <dialog
      ref={ref}
      className="bg-white justify-self-center self-center rounded-2xl p-4 border-3 border-gray-400"
    >
      <header className="mb-5">
        <h2 className="text-2xl font-[900] text-center">
          {edit ? "Editar Cliente" : "Agregar Cliente"}
        </h2>
      </header>
      <DetalleForm />
    </dialog>
  );
});

export default DetallesDialog;
