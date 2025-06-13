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
  }

  return (
    <table className="table-auto w-full text-center border-collapse">
      <thead className="bg-gray-200 text-black">
        <tr>
          <th className="p-2">Nombre</th>
          <th className="p-2">Apellido</th>
          <th className="p-2">Telefono</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td className="p-2">{cliente.Nombre}</td>
            <td className="p-2">{cliente.Apellido}</td>
            <td className="p-2">{cliente.Telefono}</td>
            <td className="flex justify-around p-2">
              <button onClick={() => OpenDialogDelete(cliente)}>Eliminar</button>
              <button onClick={() => openEditDialog(cliente)}>Editar</button>
              <button>Detalles</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientList;
