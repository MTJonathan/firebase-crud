import { useEffect } from "react";
import { obtenerDetallesClientes } from "@/lib/detalles";
export const listarDetalles = (cliente, setDetalles, setTotal, setTotalPagar, detalles) => {
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

  useEffect(() => {
    fetchDetalles();
  }, []);

  useEffect(() => {
    const suma = detalles.reduce(
      (acc, detalle) => acc + (detalle.Total || 0),
      0
    );
    setTotalPagar(suma);
  }, [detalles]);
};
