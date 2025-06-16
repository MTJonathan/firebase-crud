import { useState, useRef } from "react";
import { listarDetalles } from "@/lib/listarDetalles";
import DetallesList from "@components/Clientes/Detalles/DetallesList";
import DetallesDialog from "./DetallesDialog";

const DetallesIndex = ({ cliente }) => {
  const [detalles, setDetalles] = useState([]);
  const [edit, setEdit] = useState(false);

  const [id, setId] = useState("");
  const [clienteId] = useState(cliente?.id || "");
  const [Producto, setProducto] = useState("");
  const [Precio, setPrecio] = useState(0);
  const [Cantidad, setCantidad] = useState(0);
  const [Total, setTotal] = useState(0);

  const refDialog = useRef(null);

  listarDetalles(cliente, setDetalles, setTotal);

  const openDialog = () => {
    refDialog.current.showModal();
    setEdit(false);
    setId("");
    setProducto("");
    setPrecio(0);
    setCantidad(0);
    setTotal(0);
  };

  return (
    <div>
      <header className="m-5">
        <h1 className="text-2xl font-[900]">Deuda : {cliente.Nombre}</h1>
        <button
          onClick={openDialog}
          id="client-button"
          className="cursor-pointer m-5 p-3 font-bold border rounded-2xl"
        >
          Agregar Deuda
        </button>
      </header>
      <DetallesList
        detalles={detalles}
        refEditDialog={refDialog}
        setEdit={setEdit}
        setId={setId}
        setProducto={setProducto}
        setPrecio={setPrecio}
        setCantidad={setCantidad}
        setTotal={setTotal}
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
      />
    </div>
  );
};

export default DetallesIndex;
