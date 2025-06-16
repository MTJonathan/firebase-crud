import { useState } from "react";
import { agregarCliente, actualizarCliente } from "@/lib/firebaseService";

const ClientForm = ({
  setClientes,
  closeDialog,
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
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cliente = { Nombre, Apellido, Telefono };

    if (edit) {
      await actualizarCliente(id, cliente);
      setClientes((prevClientes) =>
        prevClientes.map((c) => (c.id === id ? { ...c, ...cliente } : c))
      );
    } else {
      const nuevo = await agregarCliente(cliente);
      setClientes((prevClientes) => [
        ...prevClientes,
        { id: nuevo.id, ...cliente },
      ]);
    }

    closeDialog();
    openDialogConfirmed();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex flex-col sm:flex-row gap-3 justify-center text-center">
        <span className="flex-1">Nombre:</span>
        <input
          type="text"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1 w-full sm:w-auto"
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>

      <label className="flex flex-col sm:flex-row gap-3 justify-center text-center">
        <span className="flex-1">Apellido:</span>
        <input
          type="text"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1 w-full sm:w-auto"
          value={Apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </label>

      <label className="flex flex-col sm:flex-row gap-3 justify-center text-center">
        <span className="flex-1">Teléfono:</span>
        <input
          type="text"
          className="outline-none border-[1.5px] rounded-2xl px-3 py-1 w-full sm:w-auto"
          value={Telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </label>

      <button className="bg-[#06002b] text-white rounded-2xl p-4" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default ClientForm;
