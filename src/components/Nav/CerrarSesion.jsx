import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const CerrarSesion = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth); // <- PASAR auth AQUÍ
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <ul className="font-bold cursor-pointer border rounded-2xl py-2 px-4 active:bg-red-500" onClick={handleLogout}>
      Cerrar sesión
    </ul>
  );
};

export default CerrarSesion;
