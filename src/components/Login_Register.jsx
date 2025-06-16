import { useState, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

const Login_Register = ({ title }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) window.location.href = "/"; // Redirige si está logueado
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (title === "Registrarse") {
        // Registro
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("¡Registro exitoso!");
        window.location.href = "/login"; // Redirige al login
      } else {
        // Login
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        window.location.href = "/"; // Redirige al inicio
      }
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <main className="bg-[#686279] py-18 md:p-18 w-screen min-h-screen">
      <div className="grid md:grid-cols-2 md:gap-10 bg-[#2c2638] md:p-25 rounded-4xl">
        {/* Banner Img*/}
        <picture className="hidden md:flex justify-center">
          <img
            src="../../public/img/banner.webp"
            className="w-full rounded-4xl"
            alt=""
            srcset=""
          />
        </picture>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-5 sm:p-10 md:px-5">
          <h1 className="text-3xl text-center font-[900] text-white">
            {title}
          </h1>
          <div className="grid gap-5">
            <input
              type="email"
              placeholder="Correo"
              className="w-full bg-[#3c364c] rounded-4xl p-3 placeholder:text-gray-400 text-white"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full bg-[#3c364c] rounded-4xl p-3 placeholder:text-gray-400 text-white"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <hr className="border-white" />

          {/* Botones */}
          <p className="text-red-500 text-center text-sm">
            {error}
          </p> 
          <div className="flex flex-wrap gap-5 justify-center md:px-5 lg:gap-20">
            <button
              className="bg-[#6d54b5] py-3 px-6 rounded-4xl cursor-pointer text-white justify-self-center"
              type="submit"
            >
              {title}
            </button>
            {title !== "Registrarse" ? (
              <button
                className="bg-[#6d54b5] py-3 px-6 rounded-4xl cursor-pointer text-white"
                type="button"
                onClick={() => {
                  window.location.href = "/register";
                }}
              >
                Registrarse
              </button>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login_Register;
