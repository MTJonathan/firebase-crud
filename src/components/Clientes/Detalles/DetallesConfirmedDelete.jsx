import { forwardRef } from 'react';
import closeDialogGeneral from '@/lib/closeDialog'
import { eliminarDetalleCliente } from '@/lib/detalles';

const DetallesConfirmedDelete = forwardRef (({id, Producto, setDetalles, refConfirmed}, ref) => {
    closeDialogGeneral(ref);
    const closeDialog = () => {
        ref.current.close();
    }

    const handleDelete = async (id) => {
        try {
          await eliminarDetalleCliente(id);
          setDetalles((prevDetalles) =>
            prevDetalles.filter((detalle) => detalle.id !== id)
          );
          closeDialog();
          if (refConfirmed.current) {
            refConfirmed.current.showModal();
          }
        } catch (error) {
          console.error("Error al eliminar detalle:", error);
        }
      };
  return (
    <dialog
        ref={ref}
        className="bg-white justify-self-center self-center rounded-2xl p-6 border-3 border-gray-400 text-center"
      >
        <h1 className="text-2xl font-[900]">
          ¿Desea eliminar el Producto {Producto}?
        </h1>

        <p className="my-4">
          Una vez eliminado{" "}
          <span className="font-[900] text-lg text-red-500">
            no se puede recuperar
          </span>
        </p>

        <div className="flex justify-center gap-4">
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
  )
})

export default DetallesConfirmedDelete
