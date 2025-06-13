import { useEffect } from "react";
const closeDialogGeneral = (ref) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && e.target === ref.current) {
        ref.current.close();
      }
    };

    const dialogEl = ref.current;
    dialogEl?.addEventListener("click", handleOutsideClick);

    return () => {
      dialogEl?.removeEventListener("click", handleOutsideClick);
    };
  }, [ref]);
};

export default closeDialogGeneral;
