import { useState, useEffect } from "react";
import { obtenerDetallesClientes } from "@/lib/detalles";
import DetallesList from "@components/Clientes/Detalles/DetallesList";

const DetallesIndex = ({ cliente }) => {
  const [detalles, setDetalles] = useState([]);
  const[id, setId] = useState("");
  const [clienteId, setClienteId] = useState(cliente?.id || "");
  const [Producto, setProducto] = useState("");
  const [Precio, setPrecio] = useState(0);
  const [Cantidad, setCantidad] = useState(0);
  const [Total, setTotal] = useState(0);

  console.log(clienteId)
  useEffect(() => {
    const fetchDetalles = async () => {
      try {
        const data = await obtenerDetallesClientes();

        // Filtrar por ClienteId
        const detallesFiltrados = data.filter(
          (detalle) => detalle.ClienteId === cliente.id
        );

        setDetalles(detallesFiltrados);

        // Calcular total (si hay precio * cantidad en cada detalle)
        const totalCalculado = detallesFiltrados.reduce((acc, detalle) => {
          const precio = Number(detalle.precio) || 0;
          const cantidad = Number(detalle.cantidad) || 0;
          return acc + precio * cantidad;
        }, 0);

        setTotal(totalCalculado);
      } catch (error) {
        console.error("Error al obtener detalles:", error);
      }
    };

    if (cliente?.id) {
      fetchDetalles();
    }
  }, [cliente]);

  return (
    <div>
      <header className="m-5">
        <h1 className="text-2xl font-[900]">Detalles : {cliente.Nombre}</h1>
        <button
          // onClick={openDialog}
          id="client-button"
          className="cursor-pointer m-5 p-3 font-bold border rounded-2xl"
        >
          Agregar Cliente
        </button>
      </header>
      <DetallesList detalles={detalles} />
    </div>
  );
};

export default DetallesIndex;
