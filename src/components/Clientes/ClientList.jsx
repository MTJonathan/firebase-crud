const ClientList = ({
  clientes,
  refDialog,
  setEdit,
  setId,
  setNombre,
  setApellido,
  setTelefono,
  refDialogDelete,
}) => {
  const openEditDialog = (cliente) => {
    refDialog.current.showModal();
    setEdit(true);
    setId(cliente.id);
    setNombre(cliente.Nombre);
    setApellido(cliente.Apellido);
    setTelefono(cliente.Telefono);
  };

  const OpenDialogDelete = (cliente) => {
    refDialogDelete.current.showModal();
    setId(cliente.id);
    setNombre(cliente.Nombre);
    setApellido(cliente.Apellido);
    setTelefono(cliente.Telefono);
  };

  return (
    <table className="table-auto w-full text-center border-collapse">
      <thead className="bg-gray-200 text-black">
        <tr className="hidden md:table-row">
          <th className="p-2">Nombre</th>
          <th className="p-2">Apellido</th>
          <th className="p-2">Telefono</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr
            key={cliente.id}
            className="flex flex-col border m-5 rounded-2xl md:rounded-none md:m-0 border-gray-300 md:table-row"
          >
            <td className="p-2">
              <span className="md:hidden font-bold">Nombre : </span>
              {cliente.Nombre}
            </td>
            <td className="p-2">
              <span className="md:hidden font-bold">Apellido : </span>
              {cliente.Apellido}
            </td>
            <td className="p-2">
              <span className="md:hidden font-bold">Telefono : </span>
              {cliente.Telefono}
            </td>
            <td className="flex justify-around p-2">
              <button onClick={() => OpenDialogDelete(cliente)}>
                Eliminar
              </button>
              <button onClick={() => openEditDialog(cliente)}>Editar</button>
              <button
                onClick={() => {
                  window.location.href = `/clientes/detalles/${cliente.id}?reload=true`;
                }}
              >
                Detalles
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientList;
