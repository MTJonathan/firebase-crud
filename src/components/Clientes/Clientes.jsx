import ClientList from "./ClientList";
import ClientDialog from "./ClientDialog";
import ClientConfirmed from "./ClientConfirmed";
import ClientConfirmedDelete from "./ClientConfirmedDelete";
import ClientDeleteDialog from "./ClientDeleteDialog";
import { useState, useEffect, useRef } from "react";
import { obtenerClientes } from "@/lib/firebaseService";
const ClientesIndex = () => {
  const [clientes, setClientes] = useState([]);
  const [edit, setEdit] = useState(false);

  const [id, setId] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Telefono, setTelefono] = useState("");

  const refAddClient = useRef(null);
  const refDialogConfiremd = useRef(null);
  const refDialogDelete = useRef(null);
  const refDeleteDialog = useRef(null);

  const openDialog = () => {
    if (refAddClient.current) {
      setEdit(false);
      setId("");
      setNombre("");
      setApellido("");
      setTelefono("");
      refAddClient.current.showModal();
    }
  };
  const closeDialog = () => {
    if (refAddClient.current) {
      refAddClient.current.close();
    }
  };

  const openDialogConfirmed = () => {
    if (refDialogConfiremd.current) {
      refDialogConfiremd.current.showModal();
    }
  };

  const closeDialogConfirmed = () => {
    if (refDialogConfiremd.current) {
      refDialogConfiremd.current.close();
    }
  };

  const fetchClientes = async () => {
    try {
      const data = await obtenerClientes();
      setClientes(data);
    } catch (error) {
      console.error("Error al obtener clientes:", error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div>
      <header className="m-5">
        <h1 className="text-3xl font-[900]">Clientes :</h1>
      </header>
      <button
        onClick={openDialog}
        id="client-button"
        className="cursor-pointer m-5 p-3 font-bold border rounded-2xl"
      >
        Agregar Cliente
      </button>

      <ClientList
        clientes={clientes}
        openDialog={openDialog}
        refDialog={refAddClient}
        setEdit={setEdit}
        setNombre={setNombre}
        setApellido={setApellido}
        setTelefono={setTelefono}
        setId={setId}
        refDialogDelete={refDialogDelete}
      />

      <ClientDialog
        ref={refAddClient}
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

      <ClientConfirmed
        ref={refDialogConfiremd}
        closeDialog={closeDialogConfirmed}
        edit={edit}
        Nombre={Nombre}
      />

      <ClientConfirmedDelete
        ref={refDialogDelete}
        Nombre={Nombre}
        id={id}
        setClientes={setClientes}
        refConfirmed={refDeleteDialog}
      />
      <ClientDeleteDialog
        ref={refDeleteDialog}
        Nombre={Nombre}
      />
    </div>
  );
};

export default ClientesIndex;
