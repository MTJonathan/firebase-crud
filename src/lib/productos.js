// src/servicios/productosService.js
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const productosRef = collection(db, 'Productos');

export const obtenerProductos = async () => {
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const agregarProducto = async (producto) => {
  return await addDoc(productosRef, producto);
};

export const actualizarProducto = async (id, producto) => {
  const productoDoc = doc(db, 'Productos', id);
  return await updateDoc(productoDoc, producto);
};

export const eliminarProducto = async (id) => {
  const productoDoc = doc(db, 'Productos', id);
  return await deleteDoc(productoDoc);
};
