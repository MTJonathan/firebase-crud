import { useEffect } from "react";
import { obtenerProductos } from "@/lib/productos";

export const listarProductos = (setProductos) => {
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProductos();
  }, []);
};
