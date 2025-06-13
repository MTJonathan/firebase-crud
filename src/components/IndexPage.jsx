import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../lib/firebase";

const IndexPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else window.location.href = "/login"; // Redirige si no está logueado
    });

    return () => unsubscribe();
  }, []);
};

export default IndexPage;
