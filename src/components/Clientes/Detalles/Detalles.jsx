import { useState, useRef } from "react";
import { listarDetalles } from "@/lib/listarDetalles";
import DetallesList from "@components/Clientes/Detalles/DetallesList";
import DetallesDialog from "./DetallesDialog";
import DetallesConfirmed from "./DetallesConfirmend";
import DetallesConfirmedDelete from "./DetallesConfirmedDelete";
import DetallesDelete from "./DetallesDelete";

const DetallesIndex = ({ cliente }) => {
  const [detalles, setDetalles] = useState([]);
  const [edit, setEdit] = useState(false);
  const [totalPagar, setTotalPagar] = useState(0);

  const [id, setId] = useState("");
  const [clienteId] = useState(cliente?.id || "");
  const [Producto, setProducto] = useState("");
  const [Precio, setPrecio] = useState(0);
  const [Cantidad, setCantidad] = useState(0);
  const [Total, setTotal] = useState(0);

  const refDialog = useRef(null);
  const refDialogConfirmed = useRef(null);
  const refConfirmedDelete = useRef(null);
  const refDeleteConfirmed = useRef(null);

  listarDetalles(cliente, setDetalles, setTotal, setTotalPagar, detalles);

  const openDialog = () => {
    refDialog.current.showModal();
    setEdit(false);
    setId("");
    setProducto("");
    setPrecio(0);
    setCantidad(0);
    setTotal(0);
  };

  const openDialogConfirmed = () => {
    if (refDialogConfirmed.current) {
      refDialogConfirmed.current.showModal();
    }
  };

  return (
    <div>
      <header className="flex m-5 items-center">
        <h1 className="text-2xl font-[900]">Deuda : {cliente.Nombre}</h1>
        <button
          onClick={openDialog}
          id="client-button"
          className="cursor-pointer m-5 p-3 font-bold border rounded-2xl"
        >
          Agregar Deuda
        </button>
      </header>
      <p className="font-bold m-5 text-2xl">
          <span className="font-[900]">Total a pagar : </span>{" "}
          S/. {totalPagar}
        </p>
      <DetallesList
        detalles={detalles}
        refEditDialog={refDialog}
        setEdit={setEdit}
        setId={setId}
        setProducto={setProducto}
        setPrecio={setPrecio}
        setCantidad={setCantidad}
        setTotal={setTotal}
        refDeleteDialog={refConfirmedDelete}
      />
      <DetallesDialog
        ref={refDialog}
        ClienteId={clienteId}
        edit={edit}
        Producto={Producto}
        setProducto={setProducto}
        Precio={Precio}
        setPrecio={setPrecio}
        Cantidad={Cantidad}
        setCantidad={setCantidad}
        Total={Total}
        setTotal={setTotal}
        setDetalles={setDetalles}
        id={id}
        openDialogConfirmed={openDialogConfirmed}
      />
      <DetallesConfirmed
        ref={refDialogConfirmed}
        edit={edit}
        Producto={Producto}
      />

      <DetallesConfirmedDelete
        ref={refConfirmedDelete}
        Producto={Producto}
        id={id}
        setDetalles={setDetalles}
        refConfirmed={refDeleteConfirmed}
      />

      <DetallesDelete ref={refDeleteConfirmed} Producto={Producto} />
    </div>
  );
};

export default DetallesIndex;
