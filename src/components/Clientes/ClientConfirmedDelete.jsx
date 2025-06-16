import { forwardRef } from "react";
import { eliminarCliente } from "@/lib/firebaseService";
import closeDialogGeneral from "@/lib/closeDialog";

const ClientConfirmedDelete = forwardRef(
  ({ Nombre, id, setClientes, refConfirmed }, ref) => {
    closeDialogGeneral(ref);
    const closeDialog = () => {
      if (ref.current) {
        ref.current.close();
      }
    };

    const handleDelete = async (id) => {
      try {
        await eliminarCliente(id);
        setClientes((prevClientes) =>
          prevClientes.filter((cliente) => cliente.id !== id)
        );
        closeDialog();
        
        if (refConfirmed.current) {
          refConfirmed.current.showModal();
        }
      } catch (error) {
        console.error("Error al eliminar cliente:", error);
      }
    };
    return (
      <dialog
        ref={ref}
        className="bg-white justify-self-center self-center rounded-2xl p-6 border-3 border-gray-400 text-center"
      >
        <h1 className="text-2xl font-[900]">
          ¿Desea eliminar el cliente {Nombre}?
        </h1>

        <p className="my-4">
          Una vez eliminado{" "}
          <span className="font-[900] text-lg text-red-500">
            no se puede recuperar
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleDelete(id)}
            className="border-2 border-gray-400 bg-[#06002b] text-white rounded-2xl py-2 px-10"
          >
            Aceptar
          </button>
          <button
            onClick={closeDialog}
            className="border-2 border-gray-400 bg-[#06002b] text-white rounded-2xl py-2 px-10"
          >
            Cancelar
          </button>
        </div>
      </dialog>
    );
  }
);

export default ClientConfirmedDelete;
