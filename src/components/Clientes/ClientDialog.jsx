import { forwardRef } from "react";
import closeDialogGeneral from "@/lib/closeDialog";
import ClientForm from "./ClientForm";
const ClientDialog = forwardRef(
  (
    {
      closeDialog,
      setClientes,
      edit,
      Nombre,
      setNombre,
      Apellido,
      setApellido,
      Telefono,
      setTelefono,
      id,
      setId,
      openDialogConfirmed,
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
            {edit ? "Editar Cliente" : "Agregar Cliente"}
          </h2>
        </header>
        <ClientForm
          setClientes={setClientes}
          closeDialog={closeDialog}
          edit={edit}
          Nombre={Nombre}
          setNombre={setNombre}
          Apellido={Apellido}
          setApellido={setApellido}
          Telefono={Telefono}
          setTelefono={setTelefono}
          id={id}
          setId={setId}
          openDialogConfirmed={openDialogConfirmed}
        />
      </dialog>
    );
  }
);

export default ClientDialog;
