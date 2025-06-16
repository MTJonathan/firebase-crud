import ProductList from "./ProductList";
import ProductAdd from "./ProductAdd";
import ProductConfirmedDelete from "./ProductConfirmedDelete";
import ProductConfirmed from "./ProductConfirmed";
import ProductDeleteDialog from "./ProductDeleteDialog";
import { useState, useRef } from "react";
import { listarProductos } from "@/lib/listarProductos";

const ProductosIndex = () => {
  const [productos, setProductos] = useState([]);
  const [edit, setEdit] = useState(false);

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  const refAddProduct = useRef(null);
  const refConfirmedDelete = useRef(null);
  const refConfirmed = useRef(null);
  const refDeleteConfirmed = useRef(null);

  const openDialog = () => {
    if (refAddProduct.current) {
      setEdit(false);
      setId("");
      setNombre("");
      setPrecio(0);
      setStock(0);
      refAddProduct.current.showModal();
    }
  };

  const openDialogConfirmed = () => {
    if (refConfirmed.current) {
      refConfirmed.current.showModal();
    }
  }

  listarProductos(setProductos);

  return (
    <div>
      <header className="m-5">
        <h1 className="text-3xl font-[900]">Productos :</h1>
        <button
          onClick={openDialog}
          id="client-button"
          className="cursor-pointer my-5 md:m-5 p-3 font-bold border rounded-2xl active:bg-red-500"
        >
          Agregar Producto
        </button>
      </header>

      <ProductList
        productos={productos}
        setId={setId}
        setNombre={setNombre}
        setPrecio={setPrecio}
        setStock={setStock}
        setEdit={setEdit}
        refDialog={refAddProduct}
        refDialogDelete={refConfirmedDelete}
      />

      <ProductAdd
        ref={refAddProduct}
        edit={edit}
        nombre={nombre}
        setNombre={setNombre}
        precio={precio}
        setPrecio={setPrecio}
        stock={stock}
        setStock={setStock}
        id={id}
        setId={setId}
        setProductos={setProductos}
        openDialogConfirmed={openDialogConfirmed}
      />

      <ProductConfirmedDelete
        nombre={nombre}
        id={id}
        setProductos={setProductos}
        ref={refConfirmedDelete}
        refConfirmed={refDeleteConfirmed}
      />

      <ProductConfirmed ref={refConfirmed} edit={edit} nombre={nombre} />

      <ProductDeleteDialog
        ref={refDeleteConfirmed}
        nombre={nombre}
      />
    </div>
  );
};

export default ProductosIndex;
